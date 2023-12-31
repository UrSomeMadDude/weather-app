import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    appcontainer: {
      flex: 1,
    },
    scrollContainer: {
      justifyContent: 'space-between',
      flex: 1,
      gap: 20,
    },
  });
};
