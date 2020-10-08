import DEV_CONFIG from './env-dev';
import PROD_CONFIG from './env-prod';

export default process.env.NODE_ENV === 'development'
  ? DEV_CONFIG
  : PROD_CONFIG;
