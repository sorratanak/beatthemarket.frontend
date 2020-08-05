import { COLORS } from './colors';
import { ITheme } from './interface';

export const LIGHT_THEME: ITheme = {
  MENU: {
    BACKGROUND_COLOR: COLORS.WHITE,
    TITLE_COLOR: COLORS.BLACK,
    ACTIVE_LABEL_COLOR: COLORS.VIKING,
  },
  GAME_SCREEN: {
    BACKGROUND_COLOR: COLORS.MERCURY,
    VIEW_COLOR: COLORS.WHITE,
    NUMBER_INDICATOR_UP: COLORS.JEWEL,
    NUMBER_INDICATOR_DOWN: COLORS.VALENCIA,
    NUMBER_INDICATOR_CHANGE: COLORS.AZURE_RADIANCE,
    LIST_VIEW_COLOR: COLORS.WHITE,
    BUTTON_UP_COLOR: COLORS.VIKING,
    BUTTON_DOWN_COLOR: COLORS.CORNFLOWER_BLUE,
    LIST_VIEW_INDICATOR_POSITIVE_COLOR: COLORS.MOON_RAKER,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MACARONI_AND_CHEESE,
    LIST_VIEW_INDICATOR_TEXT_COLOR: COLORS.BLACK,
  },
};

export const DARK_THEME: ITheme = {
  MENU: {
    BACKGROUND_COLOR: COLORS.EBONY_CLAY,
    TITLE_COLOR: COLORS.WHITE,
    ACTIVE_LABEL_COLOR: COLORS.VIKING,
  },
  GAME_SCREEN: {
    BACKGROUND_COLOR: COLORS.MIRAGE,
    VIEW_COLOR: COLORS.EBONY_CLAY,
    NUMBER_INDICATOR_UP: COLORS.JEWEL,
    NUMBER_INDICATOR_DOWN: COLORS.VALENCIA,
    NUMBER_INDICATOR_CHANGE: COLORS.AZURE_RADIANCE,
    BUTTON_UP_COLOR: COLORS.BILBAO,
    BUTTON_DOWN_COLOR: COLORS.PUNCH,
    LIST_VIEW_COLOR: COLORS.EBONY_CLAY,
    LIST_VIEW_INDICATOR_POSITIVE_COLOR: COLORS.MOON_RAKER,
    LIST_VIEW_INDICATOR_NEGATIVE_COLOR: COLORS.MOON_RAKER,
    LIST_VIEW_INDICATOR_TEXT_COLOR: COLORS.BLACK,
  },
};
