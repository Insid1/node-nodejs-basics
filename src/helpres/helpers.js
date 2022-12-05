const getDirName = (meta) => {
  return new URL('.', meta.url).pathname;
}

const getFileName = (meta) => {
  return new URL('', meta.url).pathname;
}

export {getDirName, getFileName}
