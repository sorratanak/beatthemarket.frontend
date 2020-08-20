import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
  },
  imageTile: {
    alignItems: 'center',
    flex: 0,
    flexGrow: 0,
    marginVertical: 16,
    marginHorizontal: 16,
    paddingTop: 23,
    paddingBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: '10%',
  },
});
