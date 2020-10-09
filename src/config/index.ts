import { ENV_CONFIG_TYPE } from '../constants';
import DEV_CONFIG from './env-dev';
import PROD_CONFIG from './env-prod';

function selectConfig(type: string) {
  switch (type) {
    default:
    case ENV_CONFIG_TYPE.DEVELOPMENT:
      return DEV_CONFIG;
    case ENV_CONFIG_TYPE.PRODUCTION:
      return PROD_CONFIG;
  }
}

// To switch change ENV_CONFIG_TYPE to any you like
export default selectConfig(ENV_CONFIG_TYPE.PRODUCTION);
