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
import { Ionicons, Entypo, Feather, AntDesign } from '@expo/vector-icons';



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
                  <View style={styles.titleBookMark}>
                        <Text style={styles.movieTitle} numberOfLines={2}>{movie.title}</Text>
                        <Feather style={styles.movieTitle} name="bookmark" size={24} color="black" />
                  </View>
                  <View style={styles.starText}>
                        <AntDesign name="star" size={12} color={Colors.yellow} />
                        <Text style={styles.textStyleRating}>{movie.vote_average}/10 IMDb</Text>
                  </View>
            </ScrollView>
      );
};
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
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


      },
      titleBookMark: {
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 24,
            marginTop: -15,
            borderTopStartRadius: 20,
            borderTopRightRadius: 20,
            height: 60,

      },
      movieTitle: {
            fontSize: 20,
            color: "#000",
            fontWeight: "bold",
            marginTop: 20,
            paddingVertical: 2,
            
      },
      starText: {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 24,
            backgroundColor:"white"


      },
      textStyleRating: {
            fontSize: 12,
            margin: 2,
            color: "#9C9C9C",
      }



})

export default MovieScreen;