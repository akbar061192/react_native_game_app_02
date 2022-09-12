import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import GameStart from './screens/GameStart';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootView}>
      <ImageBackground style={styles.rootView} source={require('./images/background.png')} resizeMode='cover' imageStyle={{ opacity: 0.2 }}>
        <GameStart />
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
