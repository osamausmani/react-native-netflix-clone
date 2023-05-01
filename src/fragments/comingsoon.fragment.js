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

const ComingSoonFragment = ({navigation}) => {
  nav = navigation;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text st>ComingSoonFragment</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'teal', width: '100%', height: '100%'},
});
export default ComingSoonFragment;
