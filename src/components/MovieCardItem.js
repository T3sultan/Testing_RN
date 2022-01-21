import React from 'react';
import {
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      ImageBackground
} from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { getPoster } from '../services/MovieService';

const MovieCardItem = ({
      title,
      poster,
      voteAverage,
      onPress

}) => {
      return (
            <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
                  <ImageBackground
                        style={{ ...styles.container, width: 143, height: 212 }}
                        imageStyle={{ borderRadius: 12 }}
                        source={{ uri: getPoster(poster) }}
                  >


                  </ImageBackground>


                  <View style={styles.twoContainer}>
                        <Text style={styles.movieTitle} numberOfLines={3}>{title}</Text>
                        <View style={styles.starText}>

                              <AntDesign name="star" size={12} color={Colors.yellow} />
                              <Text style={styles.textStyleRating}>{voteAverage}/10 IMDb</Text>
                        </View>

                  </View>

            </TouchableOpacity>
      );
};
const styles = StyleSheet.create({
      container: {

            borderRadius: 12,
            width: 143,
            height: 212,
            backgroundColor: Colors.active,
            elevation: 3,
            marginVertical: 2,



      },
      twoContainer: {
            justifyContent: "center",
      },
      mainContainer: {
            paddingVertical: 2,
            paddingHorizontal: 2
      },
      starText: {
            flexDirection: "row",
            alignItems: "center",

      },
      textStyleRating: {
            fontSize: 12,
            margin: 2,
            color: "#9C9C9C",
      },

      movieTitle: {
            paddingVertical: 2,
            marginTop: 5,
            width: 143,
            fontSize: 14,
            color: Colors.black,
            fontWeight: 'bold'
      }
})

export default MovieCardItem;