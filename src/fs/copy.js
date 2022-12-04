import {copyFile, readdir, mkdir} from 'node:fs/promises'
import {getDirName} from "../helpres/helpers.js";

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/';
const dest = __dirname + 'files_copy/';

export const copy = async () => {
  try {
    const fileNames = await readdir(src);
    await mkdir(dest);
    fileNames.forEach(
      (fileName) => {
        copyFile(src + fileName, dest + fileName);
      })
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

copy();
