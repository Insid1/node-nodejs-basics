import {isMainThread, Worker} from "node:worker_threads";
import {getDirName} from "../helpres/helpers.js";
import os from "os";

const numOfCpus = os.cpus().length;
const __dirname = getDirName(import.meta);
const INCREMENT = 10;


function runFibonacciWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${__dirname}worker.js`, {workerData: data});
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

const performCalculations = async () => {
  if (isMainThread) {
    const arr = [];
    for (let i = INCREMENT; i < numOfCpus + INCREMENT; i++) {
      arr.push(runFibonacciWorker(i));
    }
    const calculations = await Promise.allSettled(arr)

    console.log(calculations.map(({status, value}) => ({
      status: status === 'fulfilled' ? 'resolved' : 'error',
      value: value || null,
    })));
  }
};

await performCalculations()
