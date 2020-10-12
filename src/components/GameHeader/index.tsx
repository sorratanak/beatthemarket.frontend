import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Image,
  Share,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import {
  ThemeContext,
  UserContext,
  GameContext,
  PortfolioContext,
} from '../../contexts';
import { getThemedStyles } from './styles';
import { GameTimer } from '../GameTimer';
import { IMAGES } from '../../assets';
import { SHARE_DESCRIPTION } from '../../constants';

const EMPTY_TIMER = '00:00:00';

interface Props {
  style?: {
    container?: ViewStyle;
    username?: TextStyle;
  };
}

export function GameHeader({ style: propStyle = {} }: Props) {
  const {
    user: { userName },
  } = useContext(UserContext);
  const {
    gameEvents,
    gameId,
    isGamePaused,
    onResumeGame,
    onPauseGame,
    activeStock,
  } = useContext(GameContext);
  const { profitsRealized } = useContext(PortfolioContext);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [timeRemaining, setTimeRemaining] = useState<string>(EMPTY_TIMER);

  const profitsRealizedValue = useMemo(
    () =>
      _.reduce(
        profitsRealized?.[activeStock?.id],
        (accum, el) => accum + el.profitLoss,
        0,
      ),
    [profitsRealized, activeStock],
  );

  const onSharePress = useCallback(async () => {
    try {
      await Share.share({
        message: `${SHARE_DESCRIPTION} ${profitsRealizedValue}`,
      });
    } catch (e) {
      console.log('share error', e);
    }
  }, [profitsRealizedValue]);

  useEffect(() => {
    setTimeRemaining(
      moment()
        .hours(0)
        .minutes(gameEvents?.minutesRemaining || 0)
        .seconds(gameEvents?.secondsRemaining || 0)
        .format('HH:mm:ss'),
    );
  }, [gameEvents?.minutesRemaining, gameEvents?.secondsRemaining]);

  return (
    <View style={[themedStyles.container, propStyle.container]}>
      <View style={themedStyles.cellContainer}>
        <Text style={[themedStyles.username, propStyle.username]}>
          {userName}
        </Text>
      </View>
      <View style={themedStyles.cellContainer}>
        {timeRemaining !== EMPTY_TIMER && <GameTimer time={timeRemaining} />}
      </View>
      <View style={themedStyles.cellContainer}>
        {gameId && (
          <View style={themedStyles.rowContainer}>
            <TouchableOpacity
              style={themedStyles.pauseButtonContainer}
              onPress={isGamePaused ? onResumeGame : onPauseGame}>
              <Image
                source={isGamePaused ? IMAGES.PLAY_BUTTON : IMAGES.PAUSE_BUTTON}
                style={themedStyles.pauseButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSharePress}
              style={themedStyles.shareContainer}>
              <Image source={IMAGES.SHARE} style={themedStyles.shareIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
