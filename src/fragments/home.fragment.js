import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import moviesData from '../constants/movies.json';

const PreviewMovies = ({navigation}) => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 27,
          fontWeight: 'bold',
          marginLeft: 10,
        }}>
        Previews
      </Text>

      <FlatList
        style={{margin: 10}}
        horizontal
        data={moviesData}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MovieDetailsScreen', {data: item});
            }}>
            <Image
              style={{
                backgroundColor: 'gray',
                margin: 6,
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
              source={{uri: item.Poster}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const MoviesList = ({navigation, title, data}) => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 10,
        }}>
        {title}
      </Text>

      <FlatList
        style={{margin: 10}}
        horizontal
        data={data}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MovieDetailsScreen', {data: item});
            }}>
            <Image
              style={{
                backgroundColor: 'gray',
                margin: 6,
                width: 100,
                height: 150,
              }}
              source={{uri: item.Poster}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const HomeFragment = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground
        style={styles.topHeaderContainer}
        source={require('../assets/homebg.png')}>
        <View style={styles.topNavBar}>
          <Image
            style={styles.topNavBarIcon}
            source={require('../assets/logos_netflix_icon.png')}
          />

          <View style={styles.navBarItemContainer}>
            <TouchableOpacity style={styles.navtBarItem}>
              <Text style={styles.navBarItemText}>TV Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navtBarItem}>
              <Text style={styles.navBarItemText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navtBarItem}>
              <Text style={styles.navBarItemText}>My List</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.top10View}>
          <Image
            style={styles.topNavBarIcon}
            source={require('../assets/top10.png')}
          />
          <Text style={styles.top10Text}>#2 in Pakistan</Text>
        </View>
      </ImageBackground>

      <View style={styles.quickPlayContainer}>
        <TouchableOpacity style={styles.quickPlayItem}>
          <Image
            style={styles.topNavBarIcon}
            source={require('../assets/my_list_icon.png')}
          />
          <Text style={styles.quickPlayItemText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickPlayItemPlay}>
          <Image
            style={styles.topNavBarIcon}
            source={require('../assets/play_icon.png')}
          />
          <Text style={styles.quickPlayItemTextPlay}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickPlayItem}>
          <Image
            style={styles.topNavBarIcon}
            source={require('../assets/info_icon.png')}
          />
          <Text style={styles.quickPlayItemText}>Info</Text>
        </TouchableOpacity>
      </View>

      <PreviewMovies navigation={navigation} />

      <MoviesList
        navigation={navigation}
        title={'Popular on Netflix'}
        data={moviesData}
      />
      <MoviesList
        navigation={navigation}
        title={'Trending Now'}
        data={moviesData.slice(2, 7)}
      />
      <MoviesList
        navigation={navigation}
        title={'Top 10 in Pakistan'}
        data={moviesData.slice(5, 9)}
      />
      <MoviesList
        navigation={navigation}
        title={'My List'}
        data={moviesData.slice(7, 11)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'black'},
  topHeaderContainer: {
    height: 415,
    width: '100%',
  },
  topNavBar: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topNavBarIcon: {},
  navBarItemContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 40,
  },
  navtBarItem: {},
  navBarItemText: {color: 'white', fontSize: 18},
  top10View: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top10Text: {color: 'white', fontSize: 14, fontWeight: 'bold', marginLeft: 10},
  quickPlayContainer: {
    height: 80,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickPlayItem: {
    width: 50,
    margin: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  quickPlayItemText: {color: 'white', fontSize: 14},

  quickPlayItemPlay: {
    margin: 20,
    backgroundColor: '#E5E5E5',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  quickPlayItemTextPlay: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default HomeFragment;
