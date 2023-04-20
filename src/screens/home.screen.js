import React, {useState} from 'react';
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
import HomeFragment from '../fragments/home.fragment';
import SearchFragment from '../fragments/search.fragment';
import MoreFragment from '../fragments/more.fragment';
import ComingSoonFragment from '../fragments/comingsoon.fragment';
import DownloadsFragment from '../fragments/downloads.fragment';

const HomeScreen = ({navigation}) => {
  nav = navigation;

  const [bottomNavIndex, setBottomNavIndex] = useState(0);
  const [notifCounter, setNotifCounter] = useState(2);

  function handleBottomNavItemClick(index) {
    setBottomNavIndex(index);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.viewsContainer}>
        {bottomNavIndex == 0 ? <HomeFragment /> : null}
        {bottomNavIndex == 1 ? <SearchFragment /> : null}
        {bottomNavIndex == 2 ? <ComingSoonFragment /> : null}
        {bottomNavIndex == 3 ? <DownloadsFragment /> : null}
        {bottomNavIndex == 4 ? <MoreFragment /> : null}
      </View>

      <View style={styles.bottomNavBarContainer}>
        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(0)}
          style={styles.bottomNavItem}>
          <Image
            style={styles.bottomNavItemImage}
            source={
              bottomNavIndex == 0
                ? require('../assets/home_white.png')
                : require('../assets/home_gray.png')
            }
          />
          <Text style={{color: bottomNavIndex == 0 ? 'white' : 'gray'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(1)}
          style={styles.bottomNavItem}>
          <Image
            style={styles.bottomNavItemImage}
            source={
              bottomNavIndex == 1
                ? require('../assets/home_white.png')
                : require('../assets/home_gray.png')
            }
          />
          <Text style={{color: bottomNavIndex == 1 ? 'white' : 'gray'}}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(2)}
          style={styles.bottomNavItem}>
          <Image
            style={styles.bottomNavItemImage}
            source={
              bottomNavIndex == 2
                ? require('../assets/home_white.png')
                : require('../assets/home_gray.png')
            }
          />
          <Text
            style={{
              color: bottomNavIndex == 2 ? 'white' : 'gray',
            }}>
            Coming Soon
          </Text>

          {notifCounter > 0 ? (
            <View style={styles.navNotifCounterView}>
              <Text style={{color: 'white', fontSize: 12}}>{notifCounter}</Text>
            </View>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(3)}
          style={styles.bottomNavItem}>
          <Image
            style={styles.bottomNavItemImage}
            source={
              bottomNavIndex == 3
                ? require('../assets/home_white.png')
                : require('../assets/home_gray.png')
            }
          />
          <Text style={{color: bottomNavIndex == 3 ? 'white' : 'gray'}}>
            Downloads
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBottomNavItemClick(4)}
          style={styles.bottomNavItem}>
          <Image
            style={styles.bottomNavItemImage}
            source={
              bottomNavIndex == 4
                ? require('../assets/home_white.png')
                : require('../assets/home_gray.png')
            }
          />
          <Text style={{color: bottomNavIndex == 4 ? 'white' : 'gray'}}>
            More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {width: '100%', height: '100%'},
  bottomNavBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 52,
    width: '100%',
    backgroundColor: '#121212',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavItemImage: {
    width: 24,
    height: 24,
  },

  viewsContainer: {
    marginBottom: 52,
  },

  navNotifCounterView: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    top: 0,
    right: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
