import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  nav = navigation;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomNavBarContainer}>
        <TouchableOpacity style={{width: 100, ali}}>
          <Image source={require('../assets/home_gray.png')} />
          <Text style={{color: 'gray'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: '100%', height: '100%'},
  bottomNavBarContainer: {
    height: 52,
    width: '100%',
    backgroundColor: '#121212',
    position: 'absolute',
    bottom: 0,
  },
});

export default HomeScreen;
