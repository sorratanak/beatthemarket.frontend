interface IDefaultTheme {
  PRIMARY_BACKGROUND_COLOR?: string;
  SECONDARY_BACKGROUND_COLOR?: string;
  TEXT_COLOR?: string;
}

interface IMenuTheme {
  TITLE_COLOR?: string;
  ACTIVE_LABEL_COLOR?: string;
  INACTIVE_LABEL_COLOR?: string;
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
}

interface ISettingsScreenTheme {}

interface ISubscriptionsScreenTheme {
  ACTIVE_SUBSCRIPTION_PLAN_COLOR?: string;
  BUTTON_BACKGROUND_COLOR?: string;
  BUTTON_TEXT_COLOR?: string;
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

export interface ITheme {
  DEFAULT?: IDefaultTheme;
  MENU?: IMenuTheme;
  GAME_SCREEN?: IGameScreenTheme;
  SETTINGS_SCREEN?: ISettingsScreenTheme;
  SUBSCRIPTIONS_SCREEN?: ISubscriptionsScreenTheme;
  SIGNIN_SCREEN?: ISignInScreenTheme;
}
