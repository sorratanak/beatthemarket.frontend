interface IMenuTheme {
  BACKGROUND_COLOR?: string;
  TITLE_COLOR?: string;
  ACTIVE_LABEL_COLOR?: string;
  INACTIVE_LABEL_COLOR?: string;
}

interface IGameScreenTheme {
  BACKGROUND_COLOR?: string;
  VIEW_COLOR?: string;
  TEXT_COLOR?: string;
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

interface ISettingsScreenTheme {
  BACKGROUND_COLOR?: string;
  SWITCH_TITLE_COLOR?: string;
}

interface ISignInScreenTheme {
  BACKGROUND_COLOR?: string;
  TEXT_INPUT_BACKGROUND?: string;
  TEXT_INPUT_COLOR?: string;
  FORGOT_PASSWORD_COLOR?: string;
  RESTORE_PASSWORD_COLOR?: string;
  BUTTON_BORDER_COLOR?: string;
  LOGIN_BUTTON_TEXT_COLOR?: string;
  SIGNUP_BUTTON_BACKGROUND_COLOR?: string;
}

export interface ITheme {
  MENU?: IMenuTheme;
  GAME_SCREEN?: IGameScreenTheme;
  SETTINGS_SCREEN?: ISettingsScreenTheme;
  SIGNIN_SCREEN?: ISignInScreenTheme;
}
