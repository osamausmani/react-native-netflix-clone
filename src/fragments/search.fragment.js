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

const SearchFragment = ({navigation}) => {
  nav = navigation;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>SearchFragment</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'yellow', width: '100%', height: '100%'},
});
export default SearchFragment;
