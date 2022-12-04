import path from "path";
import {release, version} from "os";
import {createServer as createServerHttp} from "http";
import {getDirName, getFileName} from "../helpres/helpers.js";
import "./files/c.js";

const jsonAssertionForImport =  {
    assert: { type: "json" },
}
const __filename = getFileName(import.meta);
const __dirname = getDirName(import.meta);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = import('./files/a.json', jsonAssertionForImport);
} else {
    unknownObject = import('./files/b.json', jsonAssertionForImport);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3030;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

