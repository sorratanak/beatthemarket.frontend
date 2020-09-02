import { COLORS } from './colors';
import { ITheme } from './interface';
import { THEME_KEYS } from '../constants';

const COMMON_THEME: ITheme = {
  DEFAULT: {},
  MENU: {
    ACTIVE_LABEL_COLOR: COLORS.CORNFLOWER_BLUE,
  },
  HOME_SCREEN: {
    PLAY_BUTTON_BACKGROUND_COLOR: COLORS.VIKING,
    SCORE_ROW_PERCENT_COLOR: COLORS.CORNFLOWER_BLUE,
    SCORE_LIST_ITEM_TEXT_COLOR: COLORS.GRAY,
    PROFILE_LEVEL_BACKGROUND_COLOR: COLORS.MOON_RAKER,
  },
  GAME_SCREEN: {
    HEADER_IMAGE_BACKGROUND_COLOR: COLORS.WHITE,
    LIST_VIEW_INDICATOR_POSITIVE_COLOR: COLORS.MOON_RAKER,
    NUMBER_INDICATOR_UP: COLORS.JEWEL,
    NUMBER_INDICATOR_DOWN: COLORS.VALENCIA,
    NUMBER_INDICATOR_CHANGE: COLORS.AZURE_RADIANCE,
    LIST_VIEW_ACTIVE_COLOR: COLORS.MOON_RAKER,
    LIST_VIEW_INDICATOR_TEXT_COLOR: COLORS.BLACK,
    HEADER_USERNAME_COLOR: COLORS.AZURE_RADIANCE,
    HEADER_TIMER_CELL_COLOR: COLORS.MOON_RAKER,
    POSITIVE_DIFFERENCE_LINE_COLOR: COLORS.BILBAO,
    NEGATIVE_DIFFERENCE_LINE_COLOR: COLORS.PUNCH,
    POSITIVE_STOCK_CHANGE_BACKGROUND_COLOR: COLORS.MACARONI_AND_CHEESE,
    NEGATIVE_STOCK_CHANGE_BACKGROUND_COLOR: COLORS.MOON_RAKER,
    USER_LVL_CONTAINER_BACKGROUND_COLOR: COLORS.MOON_RAKER,
    USER_SCORE_PLUS_COLOR: COLORS.JEWEL,
    USER_SCORE_MINUS_COLOR: COLORS.PUNCH,
    LIST_ITEM_STOCK_AGO_TIME_COLOR: COLORS.GRAY,
  },
  SETTINGS_SCREEN: {
    BUY_BUTTON_COLOR: COLORS.VIKING,
  },
  SUBSCRIPTIONS_SCREEN: {},
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
  END_GAME_MODAL: {
    USER_LVL_TEXT_BACKGROUND: COLORS.MOON_RAKER,
    LOSE_MESSAGE_COLOR: COLORS.PUNCH,
    FINISH_BUTTON_BACKGROUND: COLORS.VIKING,
  },
  RULES: {
    FIRST_RULE_BACKGROUND_COLOR: COLORS.PERANO,
    SECOND_RULE_BACKGROUND_COLOR: COLORS.MADANG,
    THIRD_RULE_BACKGROUND_COLOR: COLORS.HUMMING_BIRD,
    FOURTH_RULE_BACKGROUND_COLOR: COLORS.BLUE_CHALK,
  },
  INFO_MODAL: {
    FIRST_BUTTON_ACCENT_BORDER_COLOR: COLORS.PUNCH,
    SECOND_BUTTON_ACCENT_BACKGROUND_COLOR: COLORS.VIKING,
  },
};

export const LIGHT_THEME: ITheme = {
  _KEY: THEME_KEYS.LIGHT_THEME,
  DEFAULT: {
    ...COMMON_THEME.DEFAULT,
    PRIMARY_BACKGROUND_COLOR: COLORS.ALMOST_WHITE,
    SECONDARY_BACKGROUND_COLOR: COLORS.WHITE,
    TEXT_COLOR: COLORS.BLACK,
  },
  MENU: {
    ...COMMON_THEME.MENU,
    TITLE_COLOR: COLORS.BLACK,
    INACTIVE_LABEL_COLOR: COLORS.BLACK,
  },
  HOME_SCREEN: {
    ...COMMON_THEME.HOME_SCREEN,
    PRIMARY_BACKGROUND_COLOR: COLORS.WHITE,
    SECONDARY_BACKGROUND_COLOR: COLORS.ALMOST_WHITE,
    SCORE_ROW_ITEM_BACKGROUND_COLOR: COLORS.MOON_RAKER,
  },
  GAME_SCREEN: {
    ...COMMON_THEME.GAME_SCREEN,
    LIST_VIEW_COLOR: COLORS.WHITE,
    BUTTON_UP_COLOR: COLORS.BILBAO,
    BUTTON_DOWN_COLOR: COLORS.PUNCH,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MACARONI_AND_CHEESE,
    HEADER_TIMER_COLON_COLOR: COLORS.BLACK,
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
  END_GAME_MODAL: {
    ...COMMON_THEME.END_GAME_MODAL,
  },
  RULES: { ...COMMON_THEME.RULES },
  INFO_MODAL: { ...COMMON_THEME.INFO_MODAL },
};

export const DARK_THEME: ITheme = {
  _KEY: THEME_KEYS.DARK_THEME,
  DEFAULT: {
    PRIMARY_BACKGROUND_COLOR: COLORS.MIRAGE,
    SECONDARY_BACKGROUND_COLOR: COLORS.EBONY_CLAY,
    TEXT_COLOR: COLORS.WHITE,
  },
  MENU: {
    ...COMMON_THEME.MENU,
    TITLE_COLOR: COLORS.WHITE,
    INACTIVE_LABEL_COLOR: COLORS.WHITE,
  },
  HOME_SCREEN: {
    ...COMMON_THEME.HOME_SCREEN,
    PRIMARY_BACKGROUND_COLOR: COLORS.MIRAGE,
    SECONDARY_BACKGROUND_COLOR: COLORS.EBONY_CLAY,
    SCORE_ROW_ITEM_BACKGROUND_COLOR: COLORS.OUTER_SPACE,
  },
  GAME_SCREEN: {
    ...COMMON_THEME.GAME_SCREEN,
    BUTTON_UP_COLOR: COLORS.BILBAO,
    BUTTON_DOWN_COLOR: COLORS.PUNCH,
    LIST_VIEW_COLOR: COLORS.EBONY_CLAY,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MOON_RAKER,
    HEADER_TIMER_COLON_COLOR: COLORS.AZURE_RADIANCE,
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
  END_GAME_MODAL: {
    ...COMMON_THEME.END_GAME_MODAL,
  },
  RULES: { ...COMMON_THEME.RULES },
  INFO_MODAL: { ...COMMON_THEME.INFO_MODAL },
};

export const THEMES = [LIGHT_THEME, DARK_THEME];
