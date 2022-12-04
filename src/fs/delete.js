import {rm} from 'node:fs/promises'
import {getDirName} from "../helpres/helpers.js";
import {fsError} from "../consts/consts.js";

const __dirname = getDirName(import.meta);

const src = __dirname + "files/fileToRemove.txt";

export const remove = async () => {
  try {
    await rm(src);
  } catch {
    throw fsError;
  }
};

remove();
