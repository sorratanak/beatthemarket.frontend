import { COLORS } from './colors';
import { ITheme } from './interface';

const COMMON_THEME: ITheme = {
  DEFAULT: {},
  MENU: {
    ACTIVE_LABEL_COLOR: COLORS.CORNFLOWER_BLUE,
  },
  GAME_SCREEN: {
    LIST_VIEW_INDICATOR_POSITIVE_COLOR: COLORS.MOON_RAKER,
    LIST_VIEW_INDICATOR_TEXT_COLOR: COLORS.GRAY,
    NUMBER_INDICATOR_UP: COLORS.JEWEL,
    NUMBER_INDICATOR_DOWN: COLORS.VALENCIA,
    NUMBER_INDICATOR_CHANGE: COLORS.AZURE_RADIANCE,
    LIST_VIEW_ACTIVE_COLOR: COLORS.MOON_RAKER,
    BUTTON_UP_COLOR: COLORS.BILBAO,
    BUTTON_DOWN_COLOR: COLORS.PUNCH,
  },
  SETTINGS_SCREEN: {},
  SUBSCRIPTIONS_SCREEN: {
    BUTTON_BACKGROUND_COLOR: COLORS.VIKING,
    BUTTON_TEXT_COLOR: COLORS.WHITE,
  },
  SIGNIN_SCREEN: {
    RESTORE_PASSWORD_COLOR: COLORS.VIKING,
    BUTTON_BORDER_COLOR: COLORS.VIKING,
    SOCIAL_MEDIA_BUTTON_TEXT_COLOR: COLORS.WHITE,
    SIGNUP_BUTTON_BACKGROUND_COLOR: COLORS.VIKING,
    GOOGLE_BUTTON_CONTAINER_COLOR: COLORS.CARDINAL,
    GOOGLE_ICON_CONTAINER_COLOR: COLORS.FUZZY_WUZZY_BROWN,
    FACEBOOK_BUTTON_CONTAINER_COLOR: COLORS.CHAMBRAY,
    FACEBOOK_ICON_CONTAINER_COLOR: COLORS.SHIP_COVE,
    APPLE_BUTTON_CONTAINER_COLOR: COLORS.WHITE,
    APPLE_BUTTON_TEXT_COLOR: COLORS.BLACK,
  },
};

export const LIGHT_THEME: ITheme = {
  DEFAULT: {
    ...COMMON_THEME.DEFAULT,
    PRIMARY_BACKGROUND_COLOR: COLORS.WHITE,
    SECONDARY_BACKGROUND_COLOR: COLORS.ALMOST_WHITE,
    TEXT_COLOR: COLORS.BLACK,
  },
  MENU: {
    ...COMMON_THEME.MENU,
    INACTIVE_LABEL_COLOR: COLORS.BLACK,
  },
  GAME_SCREEN: {
    ...COMMON_THEME.GAME_SCREEN,
    LIST_VIEW_COLOR: COLORS.WHITE,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MACARONI_AND_CHEESE,
  },
  SETTINGS_SCREEN: {
    ...COMMON_THEME.SETTINGS_SCREEN,
  },
  SUBSCRIPTIONS_SCREEN: {
    ...COMMON_THEME.SUBSCRIPTIONS_SCREEN,
    ACTIVE_SUBSCRIPTION_PLAN_COLOR: COLORS.MACARONI_AND_CHEESE,
  },
  SIGNIN_SCREEN: {
    ...COMMON_THEME.SIGNIN_SCREEN,
    TEXT_INPUT_BACKGROUND: COLORS.ALMOST_WHITE,
    TEXT_INPUT_COLOR: COLORS.GRAY,
    FORGOT_PASSWORD_COLOR: COLORS.GRAY,
    LOGIN_BUTTON_TEXT_COLOR: COLORS.BLACK,
  },
};

export const DARK_THEME: ITheme = {
  DEFAULT: {
    PRIMARY_BACKGROUND_COLOR: COLORS.MIRAGE,
    SECONDARY_BACKGROUND_COLOR: COLORS.EBONY_CLAY,
    TEXT_COLOR: COLORS.WHITE,
  },
  MENU: {
    ...COMMON_THEME.MENU,
    INACTIVE_LABEL_COLOR: COLORS.WHITE,
  },
  GAME_SCREEN: {
    ...COMMON_THEME.GAME_SCREEN,
    LIST_VIEW_COLOR: COLORS.EBONY_CLAY,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MOON_RAKER,
  },
  SETTINGS_SCREEN: {
    ...COMMON_THEME.SETTINGS_SCREEN,
  },
  SUBSCRIPTIONS_SCREEN: {
    ...COMMON_THEME.SUBSCRIPTIONS_SCREEN,
    ACTIVE_SUBSCRIPTION_PLAN_COLOR: COLORS.CORNFLOWER_BLUE,
  },
  SIGNIN_SCREEN: {
    ...COMMON_THEME.SIGNIN_SCREEN,
    TEXT_INPUT_BACKGROUND: COLORS.OXFORD_BLUE,
    TEXT_INPUT_COLOR: COLORS.WHITE,
    FORGOT_PASSWORD_COLOR: COLORS.WHITE,
    LOGIN_BUTTON_TEXT_COLOR: COLORS.VIKING,
  },
};
