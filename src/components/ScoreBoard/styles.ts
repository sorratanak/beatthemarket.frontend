import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    width: '100%',
  },
  tabContainer: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 20,
  },
  tabActiveContainer: {
    backgroundColor: 'lightgray',
  },
  tabTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
