import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
      View,
      Text,
      StyleSheet,
      Image,
      Dimensions,
      Linking,
      FlatList
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { getLanguage, getMovieById, getPoster, getVideo } from '../services/MovieService';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { APPEND_TO_RESPONSE as AR } from "../constants/Url";
import { Ionicons, Entypo, Feather, AntDesign } from '@expo/vector-icons';
import ItemSeparator from '../components/ItemSeparator';
import CastCard from '../components/CastCard';



const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const MovieScreen = ({ route, navigation }) => {
      const { movieId } = route.params;
      const [movie, setMovie] = useState({})
      const [isCastSelected, setIsCastSelected] = useState(true);


      useEffect(() => {
            getMovieById(
                  movieId,
                  `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`
            ).then((response) => setMovie(response?.data));
      }, []);

      return (
            <ScrollView style={{ backgroundColor: "white" }}>
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
                  {/* <View style={styles.genreTextStyleSet}>
                        <TouchableOpacity style={styles.genreText}>
                              <Text style={styles.textStyling}>{movie?.genres?.map((genre) => genre?.name)?.join("  ")}</Text>

                        </TouchableOpacity>

                  </View> */}
                  <View style={styles.genre}>
                        <TouchableOpacity style={styles.genre1}>
                              <Text style={styles.textStyling}>{movie?.genres?.map((genre) => genre?.name)?.join(" ")}</Text>

                        </TouchableOpacity>


                  </View>
                  <View style={styles.runTimeLanguageRating}>
                        <View>
                              <Text style={styles.textFormat}>Length</Text>
                              <Text style={styles.timeDuration}>{movie?.runtime} Min</Text>
                        </View>
                        <View>
                              <Text style={styles.textFormat}>Language</Text>
                              <Text> {getLanguage(movie?.original_language)?.english_name}</Text>
                        </View>
                        <View>
                              <Text style={styles.textFormat}>Rating</Text>
                              <Text>{movie?.vote_average}</Text>
                        </View>
                  </View>
                  <View style={styles.headerContainer}>
                        <Text style={styles.headerTextStyle}>Description</Text>
                        <Text style={styles.overView}>{movie?.overview}</Text>
                  </View>

                  <View style={styles.headerContainer1}>
                        <View>
                              <Text style={styles.headerTextStyle}>Cast</Text>
                        </View>

                        <TouchableOpacity style={styles.seeMoreStyle}>
                              <Text style={styles.textStyleSee}>See more</Text>
                        </TouchableOpacity>

                  </View>
                  <View>
                        <FlatList
                              style={{ marginVertical: 5 }}
                              data={isCastSelected ? movie?.credits?.cast : movie?.credits?.crew}
                              keyExtractor={(item) => item?.credit_id}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              ListHeaderComponent={() => <ItemSeparator width={20} />}
                              ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                              ListFooterComponent={() => <ItemSeparator width={20} />}
                              renderItem={({ item }) => (
                                    <CastCard
                                          originalName={item?.name}
                                          image={item?.profile_path}
                                    />
                              )}
                        />
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
            backgroundColor: "white"


      },
      textStyleRating: {
            fontSize: 12,
            margin: 2,
            color: "#9C9C9C",
      },
      genreText: {
            color: Colors.gray,
            paddingHorizontal: 20,
            paddingTop: 5,
            fontSize: 13,
            backgroundColor: "white"
      },
      genreTextStyleSet: {
            backgroundColor: "white",
            paddingHorizontal: 10,
            borderRadius: 10,



      },
      genre: {
            flexDirection: "row",
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingTop: 10,
            justifyContent: "space-between"




      },
      textStyling: {
            borderRadius: 5,
            borderColor: "#000",
            fontSize: 8,
            marginLeft: 5,
            backgroundColor: '#88A4E8'

      },
      genre1: {
            backgroundColor: '#88A4E8',
            borderRadius: 3,
            marginLeft: 5

      },
      runTimeLanguageRating: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            backgroundColor: "white",
            marginVertical: 20,

      },
      textFormat: {
            color: "#9C9C9C",
            fontSize: 12
      },
      timeDuration: {
            fontSize: 12,
            color: "#000"
      },
      headerTextStyle: {
            color: '#110E47',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.02,
            marginTop: 10

      },
      headerContainer: {
            paddingHorizontal: 20,
            paddingVertical: 10,

      },
      overView: {
            color: '#9C9C9C',
            fontSize: 12,
            marginTop: 8
      },
      headerContainer1: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10
      },

      seeMoreStyle: {
            backgroundColor: "white",
            width: 50,
            height: 17,
            borderRadius: 5,
            borderColor: "#AAA9B1",
            borderWidth: 1,

      },
      textStyleSee: {
            color: "#AAA9B1",
            fontSize: 10,
            lineHeight: 14,
      },

})

export default MovieScreen;