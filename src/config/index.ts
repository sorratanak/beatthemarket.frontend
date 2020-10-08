import DEV_CONFIG from './env-dev';
import PROD_CONFIG from './env-prod';

// eslint-disable-next-line
export default __DEV__ ? DEV_CONFIG : PROD_CONFIG;
