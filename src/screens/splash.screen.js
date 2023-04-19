import React from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StatusBar,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  nav = navigation;

  function moveToUserScreen() {
    console.log('moveToUserScreen is called');
    nav.navigate('UserSelectionScreen');
  }

  useEffect(() => {
    console.log('useEffect is triggered');
    myTimeout = setTimeout(moveToUserScreen, 3000);
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor="black" />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -100,
        }}>
        <Image source={require('../assets/logos_netflix.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
