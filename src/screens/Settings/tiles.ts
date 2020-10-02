import { IMAGES } from '../../assets';
import { isWeb } from '../../utils';

export const SETTINGS_TILES = [
  {
    id: 'tile-flag',
    source: IMAGES.FLAG,
    // TODO fix temporary crutch
    nav: isWeb ? null : 'Subscriptions',
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
