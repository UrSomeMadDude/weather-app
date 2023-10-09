import {StatusBar} from 'react-native';
import {weatherStore} from '../../mobx/weatherStore/weatherStore';
import {getData} from '../../constants/asyncStorage';
import React, {useEffect} from 'react';

export const useMainScreen = () => {
  StatusBar.setBarStyle('light-content');

  const {pending, getWeatherData, weatherState} = weatherStore;

  const retreiveData = async () => {
    const coords = await getData('coordinates');

    if (coords) {
      getWeatherData({
        lat: coords.lat,
        lon: coords.lon,
      });
    } else {
      getWeatherData({
        lat: 55,
        lon: 50,
      });
    }
  };

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
