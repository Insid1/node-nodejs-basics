import {fork} from 'child_process'
import {getDirName} from "../helpres/helpers.js";

const __dirname = getDirName(import.meta);

const spawnChildProcess = async (args) => {
  const child = fork(
    `${__dirname}files/script.js`
    , [...args.split(' ')])
  child.send(args)
};

await spawnChildProcess('--arg1 val1');
