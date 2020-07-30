import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    borderRadius: 14,
    backgroundColor: Platform.OS === 'web' ? 'lightgray' : '#E0E0E0',
    overflow: 'hidden',
  },
});
