import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = () => {
      return (
            <ScrollView style={styles.container}>
                  <StatusBar
                        style='auto'
                        translucent={false}
                        backgroundColor={Colors.white_background}

                  />
                  <View style={styles.headerContainer}>
                        <View>
                              <Text style={styles.headerTextStyle}>Now Showing</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                              <Button
                                    style={styles.buttonText}
                                    title='See more'
                                    borderRadius='30px'


                              />
                        </View>

                  </View>
            </ScrollView>
      );
};
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: Colors.white_background

      },
      buttonContainer: {
            width: 45,
            height: 20,
            backgroundColor: "white",
            // borderRadius: 10,

      },
      buttonText: {


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
      }
})

export default HomeScreen;