import production from './configurations/env.production';
import development from './configurations/env.development';

const configuration = (process &&
  process.env &&
  process.env.NODE_ENV === 'development') ?
  development :
  production;

export default configuration;