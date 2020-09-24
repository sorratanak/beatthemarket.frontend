import React, { useContext, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { styles } from './styles';
import { GameContext } from '../../contexts';

const TICK_TIME = 300;

export function WinBackgroundEffect() {
  const { wins } = useContext(GameContext);

  const backgroundAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (wins) {
      Animated.timing(backgroundAnim, {
        toValue: 1,
        duration: TICK_TIME,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(backgroundAnim, {
          toValue: 0,
          duration: TICK_TIME,
          useNativeDriver: false,
        }).start();
      });
    }
  }, [wins, backgroundAnim]);

  const backgroundColor = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255,255,128,0)', 'rgba(255,255,128,0.7)'],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { backgroundColor }]}
    />
  );
}
