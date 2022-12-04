import {getDirName} from "../helpres/helpers.js";
import {rename as fsRename, readFile} from 'node:fs/promises';
import {fsError} from "../consts/consts.js";


const __dirname = getDirName(import.meta);

const src = __dirname + 'files/' + 'wrongFilename.txt'
const dest = __dirname + 'files/' + 'properFilename.md'

export const rename = async () => {
  try {
    const res = await readFile(dest).catch((e) => null);
    if (res === null) {
      await fsRename(src, dest)
    } else {
      throw new Error;
    }
  } catch (e) {
    throw fsError
  }

};

rename();
