import { Platform } from 'react-native';
import { IMAGES } from '../../assets';

export const SETTINGS_TILES = [
  {
    id: 'tile-flag',
    source: IMAGES.FLAG,
    // TODO fix temporary crutch
    nav: Platform.OS === 'web' ? null : 'Subscriptions',
    title: 'Subscription',
  },
  {
    id: 'tile-fire',
    source: IMAGES.FIRE,
    nav: 'ExtraSubscriptions',
    title: 'Extra subscription',
  },
  {
    id: 'tile-speaker',
    source: IMAGES.SPEAKER,
    nav: 'SoundEffects',
    title: 'Sounds effects',
  },
  {
    id: 'tile-headphones',
    source: IMAGES.HEADPHONES,
    nav: 'Music',
    title: 'Music',
  },
  {
    id: 'tile-user',
    source: IMAGES.USER,
    nav: 'UserSettings',
    title: 'Profile',
  },
];
