import { MutationHookOptions } from '@apollo/client';
import { TThemeKey } from '../themes/interface';
import { TOfferBlockPreset, IPurchase, PurchaseType } from '../types';
import { isAndroid } from '../utils';

export * from './keys';

export const USER_KEY = '_user';
export const THEME_KEY = '_themeKey';
export const UUID_KEY = '_uuid';

export const MAX_WINS_COUNT = 9;
export const START_GAME_LEVEL = 1;
export const LEVEL_WIN_STEP = 1;

export const WEB_SCREEN_WIDTH_POINT = 1280;

export const TIME_TO_RESET_NAVIGATION = 20;

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
  EQUITY: 'Equity',
};

export const SUBSCRIPTION_TYPE: {
  [key: string]: IPurchase;
} = {
  MARGIN_TRADING: {
    TITLE: 'Margin trading 1 month',
    RNIAP_PRODUCT_ID: isAndroid
      ? 'margin_trading_1month'
      : 'margin_trading_1month.1',
    STRIPE_PRODUCT_ID: 'prod_I1RAoB8UK5GDab',
    STRIPE_PRICE_ID: 'price_0HROINu4V08wojXst9HsC6Yw',
    TYPE: 'subscription',
    PRICE: 12,
  },
  ADDITIONAL_BALANCE_100K: {
    TITLE: 'Additional balance 100k',
    RNIAP_PRODUCT_ID: 'additional_balance_100k',
    STRIPE_PRODUCT_ID: null,
    STRIPE_PRICE_ID: null,
    PRICE: 1,
    TYPE: 'subscription',
  },
  ADDITIONAL_BALANCE_200K: {
    TITLE: 'Additional balance 200k',
    RNIAP_PRODUCT_ID: 'additional_balance_200k',
    STRIPE_PRODUCT_ID: null,
    STRIPE_PRICE_ID: null,
    PRICE: 2,
    TYPE: 'subscription',
  },
  ADDITIONAL_BALANCE_300K: {
    TITLE: 'Additional balance 300k',
    RNIAP_PRODUCT_ID: 'additional_balance_300k',
    STRIPE_PRODUCT_ID: null,
    STRIPE_PRICE_ID: null,
    PRICE: 3,
    TYPE: 'subscription',
  },
  ADDITIONAL_BALANCE_400K: {
    TITLE: 'Additional balance 400k',
    RNIAP_PRODUCT_ID: 'additional_balance_400k',
    STRIPE_PRODUCT_ID: null,
    STRIPE_PRICE_ID: null,
    PRICE: 4,
    TYPE: 'subscription',
  },
};

export const ONE_TIME_PURCHASE_TYPE: {
  [key: string]: IPurchase;
} = {
  ADDITIONAL_5_MINUTES: {
    TITLE: 'Additional 5 minutes',
    RNIAP_PRODUCT_ID: 'additional_5_minutes',
    STRIPE_PRODUCT_ID: 'prod_I1REIJ0bKeXG37',
    STRIPE_PRICE_ID: 'price_0HWSALu4V08wojXsoS0hbYdR',
    TYPE: 'oneTimePurchase',
    PRICE: 5,
  },
  ADDITIONAL_100K: {
    TITLE: 'Additional $100k',
    RNIAP_PRODUCT_ID: 'additional_100k',
    STRIPE_PRODUCT_ID: 'prod_I1RCtpy369Bu4g',
    STRIPE_PRICE_ID: 'price_0HWSA8u4V08wojXshFrWn24r',
    PRICE: 1,
    TYPE: 'oneTimePurchase',
  },
  ADDITIONAL_200K: {
    TITLE: 'Additional $200k',
    RNIAP_PRODUCT_ID: 'additional_200k',
    STRIPE_PRODUCT_ID: 'prod_I1RC5THYQrZdYO',
    STRIPE_PRICE_ID: 'price_0HWSADu4V08wojXst8yZGBYI',
    PRICE: 2,
    TYPE: 'oneTimePurchase',
  },
  ADDITIONAL_300K: {
    TITLE: 'Additional $300k',
    RNIAP_PRODUCT_ID: 'additional_300k',
    STRIPE_PRODUCT_ID: 'prod_I1RDVzSR4oZKJ3',
    STRIPE_PRICE_ID: 'price_0HWSAGu4V08wojXsF4rXRExu',
    PRICE: 3,
    TYPE: 'oneTimePurchase',
  },
  ADDITIONAL_400K: {
    TITLE: 'Additional $400k',
    RNIAP_PRODUCT_ID: 'additional_400k',
    STRIPE_PRODUCT_ID: 'prod_I1RDqXXxLnMXdb',
    STRIPE_PRICE_ID: 'price_0HWSAIu4V08wojXsEE9smSny',
    PRICE: 4,
    TYPE: 'oneTimePurchase',
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

export const GAME_EVENT_NAMES = {
  WIN: 'win',
  LOSE: 'lose',
};

export const STATUS_BAR_STYLES: {
  [key: string]: 'dark-content' | 'light-content' | 'default';
} = {
  LIGHT_CONTENT: 'light-content',
  DARK_CONTENT: 'dark-content',
  DEFAULT: 'default',
};

export const QUERY_WITH_ERRORS_OPTIONS: MutationHookOptions = {
  errorPolicy: 'all',
};

export const LEVEL_THRESHOLDS: {
  [key: number]: { win: number; lose: number };
} = {
  1: {
    win: 1000,
    lose: 1000,
  },
  2: {
    win: 10000,
    lose: 2000,
  },
  3: {
    win: 50000,
    lose: 2000,
  },
  4: {
    win: 100000,
    lose: 5000,
  },
  5: {
    win: 1000000,
    lose: 10000,
  },
  6: {
    win: 10000000,
    lose: 500000,
  },
  7: {
    win: 50000000,
    lose: 500000,
  },
  8: {
    win: 100000000,
    lose: 500000,
  },
  9: {
    win: 500000000,
    lose: 500000,
  },
  10: {
    win: 1000000000,
    lose: 1000000,
  },
};

export const OFFER_PRESET_TYPE: {
  ADDITIONAL_BALANCE: TOfferBlockPreset;
  ADDITIONAL_TIME: TOfferBlockPreset;
  ADDITIONAL_MARGIN_TRADING_AND_BALANCE: TOfferBlockPreset;
} = {
  ADDITIONAL_BALANCE: 'additionalBalance',
  ADDITIONAL_TIME: 'additionalTime',
  ADDITIONAL_MARGIN_TRADING_AND_BALANCE: 'additionalMarginTradingAndBalance',
};

export const PURCHASE_TYPE: {
  SUBSCRIPTION: PurchaseType;
  ONE_TIME_PURCHASE: PurchaseType;
} = {
  SUBSCRIPTION: 'subscription',
  ONE_TIME_PURCHASE: 'oneTimePurchase',
};

export const PROFIT_LOSS_TYPE = {
  RUNNING: 'running',
  REALIZED: 'realized',
};

export const ANONYMOUS_USERNAME = 'Anonymous';

export const MICROSOFT_HOST = 'microsoft.com';

export const APPLE_HOST = 'apple.com';
export const APPLE_WEB_ANDROID_AUTH_SERVICE_ID = 'com.beatthemarket';

export const FIREBASE_AUTH_REDIRECT_URL =
  'https://beatthemarket-c13f8.firebaseapp.com/__/auth/handler';

export const FIREBASE_CLIENT_ID = '64fbbc6d-0696-4ab3-9511-b84081472d27';

export const FIREBASE_CLIENT_SECRET = 'u_KRGS4uu~ISvOES._2VAyM4gOH83opB0.';

export const SERVER_BASE_IP = 'backend.beatthemarket.io';

export const SERVER_PORT = '443';
