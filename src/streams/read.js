import {createReadStream} from "node:fs";
import {getDirName} from "../helpres/helpers.js";

const __dirname = getDirName(import.meta);
const src = __dirname + 'files/fileToRead.txt';

const read = async () => {
  const srcStream = createReadStream(src)
  srcStream.pipe(process.stdout)
};

await read();
