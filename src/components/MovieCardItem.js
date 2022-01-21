import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const MovieCardItem = () => {
      return (
            <TouchableOpacity style={styles.mainContainer}>
                  <Text style={styles.container}>URI - Surgerl Strik</Text>
                  <View style={styles.twoContainer}>
                        <Text style={styles.movieTitle} numberOfLines={3}>using React Native and Expo 
                        </Text>
                        <View style={styles.starText}>

                              <AntDesign name="star" size={12} color={Colors.yellow} />
                              <Text style={styles.textStyleRating}>rating 9/10</Text>
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
            elevation: 5,
            marginVertical: 2,



      },
      twoContainer: {
            justifyContent: "center",



      },
      mainContainer: {
            paddingVertical: 4,
            paddingHorizontal: 8
      },
      starText: {
            flexDirection: "row",
            alignItems: "center",

      },
      textStyleRating: {
            fontSize: 12,
            margin: 2
      },
      movieTitle:{
            width: 140,
      }

})

export default MovieCardItem;