import React, {
  useContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { View, Text, ViewStyle, TextStyle, FlatList } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import {
  ThemeContext,
  GameContext,
  UserContext,
  PortfolioContext,
} from '../../contexts';
import { getThemedStyles } from './styles';
import { GameTimer } from '../GameTimer';
import { userInfo, userScore, statistics } from './dummy';
import { ExpandedStockList } from '../ExpandedStockList';
import { IStock } from '../../types';
import { ACCOUNT_BALANCE_TYPE } from '../../constants';

interface Props {
  style?: {
    container?: ViewStyle;
    username?: TextStyle;
  };
}
const EMPTY_TIMER = '00:00:00';

export function GameSideBar({ style: propStyle = {} }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const {
    user: { userName },
  } = useContext(UserContext);
  const { balance, profit } = useContext(PortfolioContext);
  const { gameEvents } = useContext(GameContext);

  const [timeRemaining, setTimeRemaining] = useState<string>(EMPTY_TIMER);
  const { onSetActiveStock, stocks, activeStock } = useContext(GameContext);

  const activeProfit = useMemo(() => profit[activeStock?.id], [
    profit,
    activeStock,
  ]);
  const activeBalance = useMemo(
    () =>
      _.find(
        Object.values(balance),
        (someBalance) => someBalance.name === ACCOUNT_BALANCE_TYPE.CASH,
      ),
    [balance],
  );

  useEffect(() => {
    setTimeRemaining(
      moment()
        .hours(0)
        .minutes(gameEvents?.minutesRemaining || 0)
        .seconds(gameEvents?.secondsRemaining || 0)
        .format('HH:mm:ss'),
    );
  }, [gameEvents?.minutesRemaining, gameEvents?.secondsRemaining]);

  const onStockPress = useCallback(
    (item: IStock) => {
      onSetActiveStock(item);
    },
    [onSetActiveStock],
  );

  return (
    <View style={[themedStyles.container, propStyle.container]}>
      <View style={themedStyles.profileInfoContainer}>
        <Text style={[themedStyles.username, propStyle.username]}>
          {userName}
        </Text>
        <View style={themedStyles.userInfoContainer}>
          <View style={themedStyles.userLvlContainer}>
            <Text style={themedStyles.userLvl}>
              Level {gameEvents?.level || ''}
            </Text>
          </View>

          <View style={themedStyles.scoreContainer}>
            <Text style={themedStyles.totalScore}>
              $ {activeBalance?.balance?.toFixed(2)}
            </Text>
            <Text
              style={
                activeProfit?.profitLoss > 0
                  ? themedStyles.scorePlus
                  : themedStyles.scoreMinus
              }>
              {activeProfit?.profitLoss?.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={themedStyles.timerContainer}>
          {timeRemaining !== EMPTY_TIMER && <GameTimer time={timeRemaining} />}
        </View>
        <View style={themedStyles.statisticContainer}>
          <FlatList
            data={statistics}
            renderItem={({ item }) => (
              <View style={themedStyles.statisticItemContainer}>
                <Text style={themedStyles.statisticItemText}>{item.name}</Text>
                <Text style={themedStyles.statisticItemText}>{item.value}</Text>
              </View>
            )}
            keyExtractor={(item, index) =>
              `statistic-item-${item.name}-${index}`
            }
            extraData={themedStyles}
          />
        </View>
      </View>
      <View style={themedStyles.expandedStockListContainer}>
        <ExpandedStockList
          data={stocks}
          activeStock={activeStock}
          onItemPress={onStockPress}
        />
      </View>
    </View>
  );
}
