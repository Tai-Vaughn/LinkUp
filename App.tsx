import React, {useState} from 'react';
import * as Font from 'expo-font';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {AppLoading} from 'expo';

const getFonts = () => Font.loadAsync({
  'manrope': require('./components/HomeScreen/fonts/Manrope-VariableFont_wght.ttf'),
  'righteous': require('./components/HomeScreen/fonts/Righteous-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
  return (
      <HomeScreen/>
  );
  }

  else{
    return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}
