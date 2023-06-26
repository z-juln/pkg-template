export type Env = 'dev' | 'sit' | 'stg' | 'prod';

/**
 *  获取环境变量
 * @returns dev | sit | stg | prod
 */
export const getEnv = (): Env => {
  const { host } = window.location;
  let env: Env = 'sit';
  // TODO: host
  switch (host) {
    case 'sit.youweb.com':
      env = 'sit';
      break;
    case 'stg.youweb.com':
      env = 'stg';
      break;
    case 'youweb.com':
      env = 'prod';
      break;
    default:
      env = 'dev';
      break;
  }
  return env;
};
