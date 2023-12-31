import {StatusBar} from 'react-native';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import React, {useEffect} from 'react';

import {retreiveData} from '../../constants/utilities';

export const useMainScreen = () => {
  StatusBar.setBarStyle('light-content');

  const {pending, weatherState} = weatherStore;

  useEffect(() => {
    retreiveData();
  }, []);

  const onRefresh = React.useCallback(() => {
    retreiveData();
  }, []);

  return {
    onRefresh,
    pending,
    weatherState,
  };
};
