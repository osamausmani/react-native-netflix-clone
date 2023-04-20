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

const DownloadsFragment = ({navigation}) => {
  nav = navigation;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>DownloadsFragment</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'purple', width: '100%', height: '100%'},
});
export default DownloadsFragment;
