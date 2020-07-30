import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  flex2Container: {
    flex: 2,
  },
  flex3Container: {
    flex: 3,
  },
  listContentContainer: {
    padding: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  rankContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rankText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
