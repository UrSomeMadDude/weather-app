import React from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {observer} from 'mobx-react';

import {useStyles} from './styles';

import {GeneralWeatherData} from '../../components/GeneralWeatherData/GeneralWeatherData';
import {Forecasts} from '../../components/Forecasts/Forecasts';
import {ProggressBar} from '../../components/ProggressBar/ProggressBar';
import {useMainScreen} from './use_MainScreen';

export const MainScreen = observer(() => {
  const styles = useStyles();
  const {onRefresh, pending, weatherState} = useMainScreen();

  if (!weatherState) {
    return null;
  }

  const {fact, forecasts} = weatherState;

  return (
    <>
      {pending ? (
        <ProggressBar />
      ) : (
        <SafeAreaView style={styles.appcontainer}>
          <KeyboardAvoidingView style={styles.container}>
            <ScrollView
              nestedScrollEnabled={true}
              refreshControl={
                <RefreshControl refreshing={pending} onRefresh={onRefresh} />
              }
              contentContainerStyle={styles.scrollContainer}>
              <GeneralWeatherData
                condition={fact.condition}
                humidity={fact.humidity}
                temp={fact.temp}
                weatherIcon={fact.icon}
                windSpeed={fact.wind_speed}
                tag="Yandex"
              />
              <Forecasts forecasts={forecasts} tag="Yandex" />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </>
  );
});
