import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'lightgray',
    borderRadius: 14,
  },
  scoreLabelContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
});
