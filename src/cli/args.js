const parseArgs = () => {
  const {argv} = process;
  let result = [];

  const optimizedArgs = argv.slice(2)
  for (let i = 0; i < optimizedArgs.length -1; i+=2) {
    const key = optimizedArgs[i].slice(2);
    const value = optimizedArgs[i+1];

    result.push(`${key} is ${value}`)
  }
  console.log(result.join(', '))
};

parseArgs();
