import { writeFile } from 'node:fs/promises';
import {getDirName} from "../helpres/helpers.js";

const __dirname = getDirName(import.meta);

const TEXT = "I am fresh and young";
const FILE_NAME = "fresh.txt";
const FILE_PATH = __dirname + "files/" + FILE_NAME;

export const create = async () => {
  try {
    await writeFile(FILE_PATH, TEXT, {flag: "wx"});
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

create();
