import {readFile} from 'node:fs/promises'
import {getDirName} from "../helpres/helpers.js";
import {fsError} from "../consts/consts.js";

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/fileToRead.txt';

export const read = async () => {
  try {
    const res = await readFile(src, {encoding: 'utf-8'});
    console.log(res)
  } catch {
    throw fsError;
  }
};

read();
