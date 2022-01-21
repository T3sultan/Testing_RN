import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
      View,
      Text,
      StyleSheet,
      Image,
      Dimensions,
      Linking
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { getMovieById, getPoster, getVideo } from '../services/MovieService';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { APPEND_TO_RESPONSE as AR } from "../constants/Url";
import { Ionicons, Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const MovieScreen = ({ route, navigation }) => {
      const { movieId } = route.params;
      const [movie, setMovie] = useState({})

      useEffect(() => {
            getMovieById(
                  movieId,
                  `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`
            ).then((response) => setMovie(response?.data));
      }, []);

      return (
            <ScrollView>
                  <StatusBar
                        style='auto'

                  />
                  <View style={styles.posterMovieStyle}>
                        <Image
                              style={styles.moviePosterImageStyle}
                              resizeMode='cover'
                              source={{ uri: getPoster(movie.backdrop_path) }}
                        />
                  </View>
                  <View style={styles.headerBack}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Ionicons name="arrow-back-sharp" size={16} color="white" />

                        </TouchableOpacity>
                        <TouchableOpacity>
                              <Entypo name="dots-three-horizontal" size={16} color="white" />

                        </TouchableOpacity>

                  </View>
                  <View style={styles.buttonPlayStyle}>
                        <TouchableOpacity onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}>
                              <Ionicons name="play-circle-outline" size={45} color="white" />
                        </TouchableOpacity>
                  </View>
                  <Text>{movie.title}</Text>
            </ScrollView>
      );
};
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
      },
      posterMovieStyle: {
            // height: setHeight(35),
            // width: setWidth(145),
            // alignItems: "center",
            // position: "absolute",
            // left: setWidth((100 - 145) / 2),
            // top: 0,
            // borderBottomRightRadius: 300,
            // borderBottomLeftRadius: 300,
            // elevation: 8,

      },
      moviePosterImageStyle: {

            width: setWidth(145),
            height: setHeight(35),

      },
      headerBack: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            position: "absolute",
            right: 0,
            left: 0,
            top: 70,
            elevation: 20

      },
      buttonPlayStyle: {
            position: "absolute",
            top: 110,
            left: setWidth(50) - 70 / 2,
            elevation: 10,


      }


})

export default MovieScreen;