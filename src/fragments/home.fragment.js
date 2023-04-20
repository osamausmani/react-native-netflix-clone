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
  ScrollView,
} from 'react-native';

const HomeFragment = ({navigation}) => {
  nav = navigation;
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={{fontSize: 30}}>HomeFragment</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',

    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default HomeFragment;
