import { readdir} from 'node:fs/promises'
import {getDirName} from "../helpres/helpers.js";
import {fsError} from "../consts/consts.js";

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/';

export const list = async () => {

  try {
    const fileNames = await readdir(src);
    fileNames.forEach((fileName) => {
      console.log(fileName);
    })

  } catch {
    throw fsError;
  }
};

list();
