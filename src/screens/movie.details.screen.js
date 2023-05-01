import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';

const MovieDetailsScreen = ({navigation, route}) => {
  // console.log(route.params.data);
  let movieInfo = route.params.data;
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar translucent={false} backgroundColor="black" />

      <ImageBackground
        resizeMode="stretch"
        style={styles.moviesImage}
        source={{uri: movieInfo.Poster}}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: '100%',
            height: '100%',
          }}></View>
      </ImageBackground>

      <View style={styles.itemInfoContainer}>
        <View style={styles.itemType}>
          <Text style={styles.itemTypeText}>{movieInfo.Type}</Text>
        </View>
        <View>
          <Text style={styles.itemTitleText}>{movieInfo.Title}</Text>
        </View>

        <View style={styles.itemType}>
          <Text style={[styles.itemTypeText, {color: 'grey'}]}>
            {movieInfo.Genre.replaceAll(',', ' • ')}
          </Text>
        </View>

        <View style={styles.itemType}>
          <Text
            style={[
              styles.itemTypeText,
              {color: 'white', paddingTop: 10, paddingBottom: 10},
            ]}>
            {movieInfo.Plot}
          </Text>
        </View>

        <View style={styles.itemType}>
          <Text style={[styles.itemTypeText, {color: 'grey'}]}>
            {movieInfo.Actors.replaceAll(',', ' • ')}
          </Text>
        </View>

        <View style={styles.movieMoreInfoContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.moreInfoText}>{movieInfo.Rated}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.moreInfoText}>{movieInfo.Released}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.moreInfoText}>{movieInfo.imdbRating}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.moreInfoText}>{movieInfo.Runtime}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>Watch Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'black'},
  moviesImage: {height: 600, width: '100%'},
  itemInfoContainer: {margin: 15},
  itemType: {},
  itemTypeText: {color: '#b5141b', textTransform: 'capitalize'},
  itemTitleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  movieMoreInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  moreInfoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: '#b5141b',
    height: 50,
    marginTop: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
});

export default MovieDetailsScreen;
