import {pipeline} from "node:stream/promises";
import {createReadStream, createWriteStream} from "node:fs";
import {createGzip} from "node:zlib";
import {getDirName} from "../helpres/helpers.js";


const __dirname = getDirName(import.meta);
const src = __dirname + 'files/fileToCompress.txt';
const dest = __dirname + 'files/archive.gz';

const compress = async () => {
  const source = createReadStream(src);
  const gzip = createGzip();
  const destination = createWriteStream(dest);

  await pipeline(source, gzip, destination)
};

await compress();
