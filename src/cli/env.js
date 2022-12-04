const TAG = 'RSS_';

const parseEnv = () => {
  const {env} = process;
  Object.entries(env).forEach(([key, value]) => key.startsWith(TAG) && console.log(`${key}=${value}`))
};

parseEnv();
