import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from '../constants/Colors';
const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) * w;


const GenreCard = ({ genreName, active, onPress }) => {
      return (
            <TouchableOpacity
                  style={{
                        ...styles.container,
                        backgroundColor: active ? Colors.active : Colors.white
                  }}
                  activeOpacity={0.5}
                  onPress={()=>onPress(genreName)}
            >
                  <Text
                        style={{
                              ...styles.genreText,
                              color: active ? Colors.white : Colors.black
                        }}
                  >{genreName}</Text>

            </TouchableOpacity>
      );
};
const styles = StyleSheet.create({
      container: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: Colors.white,
            paddingVertical: 8,
            elevation: 3,
            marginVertical: 2,
            width: setWidth(25),
      },
      genreText: {
            color: Colors.active
      }
})
export default GenreCard;