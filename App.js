import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducer/meals";

enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
  if (!fontLoaded){
    return <AppLoading
        startAsync={fetchFont}
        onFinish={() => {setFontLoaded(true)}}
    />
  }

  return (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>

  );
}