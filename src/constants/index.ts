import { TThemeKey } from '../themes/interface';

export * from './keys';

export const USER_KEY = '_user';
export const THEME_KEY = '_themeKey';
export const UUID_KEY = '_uuid';

export const MAX_GAME_LEVEL = 1;
export const START_GAME_LEVEL = 1;
export const LEVEL_WIN_STEP = 1;

export const WEB_SCREEN_WIDTH_POINT = 1280;

export const STOCK_CHANGE_TYPE = {
  BUY: 'buy',
  SELL: 'sell',
};

export const PORTFOLIO_UPDATE_TYPE = {
  PROFIT: 'ProfitLoss',
  BALANCE: 'AccountBalance',
};

export const ACCOUNT_BALANCE_TYPE = {
  CASH: 'Cash',
};

export const SUBSCRIPTION_TYPE = {
  ADDITIONAL_BALANCE_100K: {
    APPLE_PRODUCT_ID: 'additional_balance_100k',
    STRIPE_PRODUCT_ID: 'prod_HrvyV6uaKEFvHd',
  },
};

export const THEME_KEYS: { [keyName: string]: TThemeKey } = {
  LIGHT_THEME: 'LIGHT_THEME',
  DARK_THEME: 'DARK_THEME',
};

export const RULES_ID = {
  FIRST_BLOCK: 'h3exl8p0mge',
  SECOND_BLOCK: 'hne1l8p0mge',
  THIRD_BLOCK: 'h3e3lup7mge',
  FOURTH_BLOCK: 'h3exl5p5m2e',
};

export const GAME_EVENT_TYPENAMES = {
  LEVEL_TIMER: 'LevelTimer',
  LEVEL_STATUS: 'LevelStatus',
  CONTROL_EVENT: 'ControlEvent',
};

export const STATUS_BAR_STYLES: {
  [key: string]: 'dark-content' | 'light-content' | 'default';
} = {
  LIGHT_CONTENT: 'light-content',
  DARK_CONTENT: 'dark-content',
  DEFAULT: 'default',
};

export const DEVELOPMENT_SERVER_BASE_IP =
  'beatthemarket5-env.eba-42mjkwti.us-east-1.elasticbeanstalk.com';

export const DEVELOPMENT_SERVER_PORT = '80';
