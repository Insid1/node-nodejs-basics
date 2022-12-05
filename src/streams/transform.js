import {Transform} from 'stream'

const reverse = new Transform({
  transform(chunk, encoding, cb) {
    const transformedData = `${chunk.toString().split('').reverse().join('')}\n`

    cb(null, transformedData);
  },
});

const transform = async () => {
  const {stdin, stdout} = process;

  stdin.pipe(reverse).pipe(stdout)
};

await transform();
