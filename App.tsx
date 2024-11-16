import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import Main from './src/navigation/Main';
import {setTopLevelNavigator} from './src/services/NavigationService';
import {ThemeProvider} from './src/context/ThemeContext';
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => BootSplash.hide()}
        ref={navigationRef => setTopLevelNavigator(navigationRef)}>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
