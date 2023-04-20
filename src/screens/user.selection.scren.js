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
  FlatList,
  TouchableOpacity,
} from 'react-native';

const userDataArr = [
  {id: 1, name: 'User A', userImage: require('../assets/user1.png')},
  {id: 2, name: 'User A', userImage: require('../assets/user2.png')},
  {id: 3, name: 'User C', userImage: require('../assets/user3.png')},
  {id: 4, name: 'User D', userImage: require('../assets/user4.png')},
  {id: 5, name: 'User E', userImage: require('../assets/user4.png')},
];

let nav;

function handleItemClick() {
  nav.navigate('HomeScreen');
}

const UserItem = ({item}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={handleItemClick}
    style={{width: '50%', padding: 10}}>
    <Image style={styles.itemImage} source={item.userImage} />
    <Text style={styles.itemName}>{item.name}</Text>
  </TouchableOpacity>
);

const UserSelectionScreen = ({navigation}) => {
  nav = navigation;
  useEffect(() => {
    console.log('useEffect is triggered');
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar animated={true} backgroundColor="black" />

      <View style={styles.topLogoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/logos_netflix.png')}
        />
      </View>

      <View style={styles.userItemListContainer}>
        <FlatList
          data={userDataArr}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },

  topLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  logoImage: {
    height: 57,
    width: 120,
    resizeMode: 'contain',
  },

  userItemListContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 80,
  },

  itemContainer: {},
  itemImage: {width: '100%', height: 92},
  itemName: {fontSize: 20, color: 'white', padding: 4},
});

export default UserSelectionScreen;
