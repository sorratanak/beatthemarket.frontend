interface IDefaultTheme {
  PRIMARY_BACKGROUND_COLOR?: string;
  SECONDARY_BACKGROUND_COLOR?: string;
  TEXT_COLOR?: string;
  BACKDROP_BACKGROUND_COLOR?: string;
}

interface IMenuTheme {
  TITLE_COLOR?: string;
  ACTIVE_LABEL_COLOR?: string;
  INACTIVE_LABEL_COLOR?: string;
  BACKGROUND_COLOR?: string;
}

interface IHomeScreenTheme {
  PRIMARY_BACKGROUND_COLOR?: string;
  SECONDARY_BACKGROUND_COLOR?: string;
  PLAY_BUTTON_BACKGROUND_COLOR?: string;
  SCORE_LIST_ITEM_TEXT_COLOR?: string;
  SCORE_LIST_ITEM_RANK_COLOR?: string;
  SCORE_ROW_ITEM_BACKGROUND_COLOR?: string;
  SCORE_ROW_PERCENT_COLOR?: string;
  PROFILE_LEVEL_BACKGROUND_COLOR?: string;
}

interface IGameScreenTheme {
  HEADER_IMAGE_BACKGROUND_COLOR?: string;
  NUMBER_INDICATOR_UP?: string;
  NUMBER_INDICATOR_DOWN?: string;
  NUMBER_INDICATOR_CHANGE?: string;
  BUTTON_UP_COLOR?: string;
  BUTTON_DOWN_COLOR?: string;
  LIST_VIEW_COLOR?: string;
  LIST_VIEW_ACTIVE_COLOR?: string;
  LIST_VIEW_INDICATOR_POSITIVE_COLOR?: string;
  LIST_VIEW_INDICATOR_NEGATIVE_COLOR?: string;
  LIST_VIEW_INDICATOR_TEXT_COLOR?: string;
  HEADER_USERNAME_COLOR?: string;
  HEADER_TIMER_CELL_COLOR?: string;
  HEADER_TIMER_COLON_COLOR?: string;
  POSITIVE_DIFFERENCE_LINE_COLOR?: string;
  NEGATIVE_DIFFERENCE_LINE_COLOR?: string;
  POSITIVE_STOCK_CHANGE_BACKGROUND_COLOR?: string;
  NEGATIVE_STOCK_CHANGE_BACKGROUND_COLOR?: string;
  USER_LVL_CONTAINER_BACKGROUND_COLOR?: string;
  USER_SCORE_PLUS_COLOR?: string;
  USER_SCORE_MINUS_COLOR?: string;
  LIST_ITEM_STOCK_AGO_TIME_COLOR?: string;
}

interface ISettingsScreenTheme {
  BUY_BUTTON_COLOR?: string;
}

interface ISubscriptionsScreenTheme {
  ACTIVE_SUBSCRIPTION_PLAN_COLOR?: string;
  BUTTON_BACKGROUND_COLOR?: string;
  BUTTON_TEXT_COLOR?: string;
  PAY_BUTTONS_BACKGROUND_COLOR?: string;
  PAY_BUTTONS_TEXT_COLOR?: string;
}

interface ISignInScreenTheme {
  TEXT_INPUT_BACKGROUND?: string;
  TEXT_INPUT_COLOR?: string;
  FORGOT_PASSWORD_COLOR?: string;
  RESTORE_PASSWORD_COLOR?: string;
  BUTTON_BORDER_COLOR?: string;
  LOGIN_BUTTON_TEXT_COLOR?: string;
  SOCIAL_MEDIA_BUTTON_TEXT_COLOR?: string;
  SIGNUP_BUTTON_BACKGROUND_COLOR?: string;
  GOOGLE_BUTTON_CONTAINER_COLOR?: string;
  GOOGLE_ICON_CONTAINER_COLOR?: string;
  FACEBOOK_BUTTON_CONTAINER_COLOR?: string;
  FACEBOOK_ICON_CONTAINER_COLOR?: string;
  APPLE_BUTTON_CONTAINER_COLOR?: string;
  APPLE_BUTTON_TEXT_COLOR?: string;
}

interface IEndGameModalTheme {
  USER_LVL_TEXT_BACKGROUND?: string;
  LOSE_MESSAGE_COLOR?: string;
  FINISH_BUTTON_BACKGROUND?: string;
}

interface IRulesTheme {
  FIRST_RULE_BACKGROUND_COLOR?: string;
  SECOND_RULE_BACKGROUND_COLOR?: string;
  THIRD_RULE_BACKGROUND_COLOR?: string;
  FOURTH_RULE_BACKGROUND_COLOR?: string;
}

interface IInfoModalTheme {
  FIRST_BUTTON_ACCENT_BORDER_COLOR?: string;
  SECOND_BUTTON_ACCENT_BACKGROUND_COLOR?: string;
}

export type TThemeKey = 'LIGHT_THEME' | 'DARK_THEME';

export interface ITheme {
  _KEY?: TThemeKey;
  DEFAULT?: IDefaultTheme;
  MENU?: IMenuTheme;
  HOME_SCREEN: IHomeScreenTheme;
  GAME_SCREEN?: IGameScreenTheme;
  SETTINGS_SCREEN?: ISettingsScreenTheme;
  SUBSCRIPTIONS_SCREEN?: ISubscriptionsScreenTheme;
  SIGNIN_SCREEN?: ISignInScreenTheme;
  END_GAME_MODAL?: IEndGameModalTheme;
  RULES?: IRulesTheme;
  INFO_MODAL?: IInfoModalTheme;
}
