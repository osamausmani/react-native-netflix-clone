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
} from 'react-native';

const MoreFragment = ({navigation}) => {
  nav = navigation;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>MoreFragment</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'red', width: '100%', height: '100%'},
});
export default MoreFragment;
