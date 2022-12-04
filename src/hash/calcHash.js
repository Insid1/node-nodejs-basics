import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
import {readFile} from 'node:fs/promises';
import {getDirName} from "../helpres/helpers.js";
const hash = createHash('sha256');

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/fileToCalculateHashFor.txt';

export const calculateHash = async () => {
  const data = await readFile(src);
  const hashedFile = hash.update(data);
  console.log(hashedFile.digest('hex'))

  // as stream

  // const input = createReadStream(src);
  //
  // input.on('readable', () => {
  //   const data = input.read();
  //   if (data)
  //     hash.update(data);
  //   else {
  //     console.log(`${hash.digest('hex')} ${src}`);
  //   }
  // })
};

calculateHash();
