import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import {
      StyleSheet,
      View,
      Text,
      ScrollView,
      Button,
      TouchableOpacity,
      FlatList
} from 'react-native';
import Colors from '../constants/Colors';
import ItemSeparator from '../components/ItemSeparator';
import GenreCard from '../components/GenreCard';
import MovieCardItem from '../components/MovieCardItem';
import { getNowPlayingMovies } from '../services/MovieService';


const genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
      const [activeGenre, setActiveGenre] = useState("All");
      const [nowPlayingMovies, setNowPlayingMovies] = useState({});

      useEffect(() => {
            getNowPlayingMovies().then((movieResponse) =>
                  setNowPlayingMovies(movieResponse.data)
            );

      }, []);




      return (
            <ScrollView style={styles.container}>
                  <StatusBar
                        style='auto'
                        translucent={false}
                        backgroundColor={Colors.white_background}

                  />
                  <View style={styles.mainRootHeader}>
                        <View>
                              <Ionicons name="menu" size={16} color="black" />
                        </View>
                        <View>
                              <Text style={styles.headerTextStyle}>FilmKu</Text>
                        </View>
                        <View>
                              <Ionicons name="notifications-outline" size={16} color="black" />
                        </View>

                  </View>
                  <View style={styles.headerContainer}>
                        <View>
                              <Text style={styles.headerTextStyle}>Now Showing</Text>
                        </View>

                        <TouchableOpacity style={styles.seeMoreStyle}>
                              <Text style={styles.textStyleSee}>See more</Text>
                        </TouchableOpacity>

                  </View>

                  <View>
                        <FlatList
                              data={nowPlayingMovies.results}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              keyExtractor={(item) => item.id.toString()}
                              ItemSeparatorComponent={() => <ItemSeparator width={20} />}
                              ListHeaderComponent={() => <ItemSeparator width={20} />}
                              ListFooterComponent={() => <ItemSeparator width={20} />}
                              renderItem={({ item }) => (
                                    <MovieCardItem
                                          title={item.title}
                                          language={item.original_language}
                                          voteAverage={item.vote_average}
                                          voteCount={item.vote_count}
                                          poster={item.poster_path}
                                          heartLess={false}
                                          onPress={() => navigation.navigate("movie", { movieId: item.id })}

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
            backgroundColor: Colors.white_background

      },

      headerContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10
      },
      headerTextStyle: {
            color: '#110E47',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.02,
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
      genreListContainer: {
            paddingVertical: 10,
            // paddingHorizontal: 20,
            padding: 10
      },
      mainRootHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10
      }
})

export default HomeScreen;