import {getDirName} from "../helpres/helpers.js";
import {createWriteStream} from "node:fs";

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/fileToWrite.txt';

const write = async () => {
  const writeStream = createWriteStream(src, {encoding: "utf-8"})

  // without exit logic
  // process.stdin.pipe(writeStream);

  // with exit logic
  process.stdin.on('data', (chunk) => {
    chunk.toString().trim() === 'exit'
      ? process.stdin.destroy()
      : writeStream.write(chunk)
  })
};

await write();
