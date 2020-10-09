import { IMAGES } from '../../assets';

export const SETTINGS_NAV_TYPES = {
  SUBSCRIPTIONS: 'Subscriptions',
  // EXTRA_SUBSCRIPTIONS: 'ExtraSubscriptions',
  SOUND_EFFECTS: 'SoundEffects',
  MUSIC: 'Music',
  USER_SETTINGS: 'UserSettings',
};

export const SETTINGS_TILES = [
  {
    id: 'tile-flag',
    source: IMAGES.FLAG,
    nav: SETTINGS_NAV_TYPES.SUBSCRIPTIONS,
    title: 'Subscriptions',
  },
  // {
  //   id: 'tile-fire',
  //   source: IMAGES.FIRE,
  //   nav: SETTINGS_NAV_TYPES.EXTRA_SUBSCRIPTIONS,
  //   title: 'Extra subscription',
  // },
  // {
  //   id: 'tile-speaker',
  //   source: IMAGES.SPEAKER,
  //   nav: SETTINGS_NAV_TYPES.SOUND_EFFECTS,
  //   title: 'Sounds effects',
  // },
  // {
  //   id: 'tile-headphones',
  //   source: IMAGES.HEADPHONES,
  //   nav: SETTINGS_NAV_TYPES.MUSIC,
  //   title: 'Music',
  // },
  {
    id: 'tile-user',
    source: IMAGES.USER,
    nav: SETTINGS_NAV_TYPES.USER_SETTINGS,
    title: 'Profile',
  },
];
