import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Platform } from 'react-native';
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
        useNativeDriver: Platform.OS === 'web',
      }).start(() => {
        Animated.timing(backgroundAnim, {
          toValue: 0,
          duration: TICK_TIME,
          useNativeDriver: Platform.OS === 'web',
        }).start();
      });
    }
  }, [wins]);

  const backgroundColor = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0,255,128,0)', 'rgba(0,255,128,0.7)'],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { backgroundColor }]}
    />
  );
}
