import {pipeline} from "node:stream/promises";
import {getDirName} from "../helpres/helpers.js";
import {createUnzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";

const __dirname = getDirName(import.meta);

const src = __dirname + 'files/archive.gz';
const dest = __dirname + 'files/fileToCompress.txt';

const decompress = async () => {
  const source = createReadStream(src);
  const unzip = createUnzip();
  const destination = createWriteStream(dest);

  await pipeline(source, unzip, destination)
};

await decompress();
