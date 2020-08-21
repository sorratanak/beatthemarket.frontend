import { TThemeKey } from '../themes/interface';

export * from './keys';

export const USER_KEY = '_user';
export const THEME_KEY = '_themeKey';

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
