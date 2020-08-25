import { IMAGES } from '../../assets';
import { ITheme } from '../../themes/interface';
import { RULES_ID } from '../../constants';

export const getRulesInfo = (theme: ITheme) => {
  const RULES_TILES = [
    {
      id: RULES_ID.FIRST_BLOCK,
      number: IMAGES.ONE,
      image: IMAGES.ROCKET,
      text: `Start with $100'000 balance (user can subscribe for more starting balance)`,
      bgColor: theme.RULES.FIRST_RULE_BACKGROUND_COLOR,
    },
    {
      id: RULES_ID.SECOND_BLOCK,
      number: IMAGES.TWO,
      image: IMAGES.RULES,
      text: `Buy & Sell to make profits and losses`,
      bgColor: theme.RULES.SECOND_RULE_BACKGROUND_COLOR,
    },
    {
      id: RULES_ID.THIRD_BLOCK,
      number: IMAGES.THREE,
      image: IMAGES.LEVEL_UP,
      text: `Each level’s profit threshold gets you to the next level`,
      bgColor: theme.RULES.THIRD_RULE_BACKGROUND_COLOR,
    },
    {
      id: RULES_ID.FOURTH_BLOCK,
      number: IMAGES.FOUR,
      image: IMAGES.REVIEW,
      text: `Try to beat your best profit levels! Try to be all other traders on the market!`,
      bgColor: theme.RULES.FOURTH_RULE_BACKGROUND_COLOR,
    },
  ];
  return RULES_TILES;
};
