import React from 'react';
import {
      StyleSheet,
      View,
      Text,
      TouchableOpacity,
      ImageBackground
} from 'react-native';
import Colors from '../constants/Colors';
// import { ImageBackground } from 'react-native-web';
import { getPoster } from '../services/MovieService';
import { AntDesign } from '@expo/vector-icons';


const MoviePopular = ({
      title,
      voteAverage,
      poster,
      onPress

}) => {
      return (
            <TouchableOpacity style={styles.mainContainer}>
                  <ImageBackground
                        style={{ ...styles.container }}
                        imageStyle={{ borderRadius: 12 }}
                        source={{ uri: getPoster(poster) }}
                  >


                  </ImageBackground>
                  <View style={styles.rightTitle}>
                        <Text style={styles.movieTitle} numberOfLines={3}>{title}</Text>
                        <View style={styles.starText}>
                              <AntDesign name="star" size={12} color={Colors.yellow} />
                              <Text style={styles.textStyleRating}>{voteAverage}/10 IMDb</Text>

                        </View>
                        <View style={styles.duration}>
                              <AntDesign name="clockcircleo" size={12} color="black" />
                              <Text style={styles.durationText}>1h 47m</Text>


                        </View>

                  </View>
            </TouchableOpacity>
      );
};
const styles = StyleSheet.create({
      container: {

            borderRadius: 12,
            width: 85,
            height: 128,
            backgroundColor: Colors.active,
            elevation: 3,




      },

      mainContainer: {
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20

      },
      movieTitle: {
            paddingVertical: 2,
            marginTop: 8,
            width: 143,
            fontSize: 14,
            color: Colors.black,
            fontWeight: 'bold',

      },
      rightTitle: {
            marginLeft: 16,

      },
      textStyleRating: {
            fontSize: 12,
            margin: 2,
            color: "#9C9C9C",

      },
      starText: {
            flexDirection: "row",
            alignItems: "center",

      },
      duration:{
            flexDirection:"row",
            alignItems:"center",
      },
      durationText:{
            fontSize:12,
            marginLeft:4
      }
      
})

export default MoviePopular;