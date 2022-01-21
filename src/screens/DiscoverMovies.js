import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import { useEffect } from 'react';
import {GET} from '../services/API'

const DiscoverMovies = () => {

      useEffect(() => {
            const getMovies = async () => {
                  const response = await GET('/movie/now_playing');
                  console.log(response)
            }
            getMovies();

      },[])

      return (
            <View>
                  <Text>DiscoverMovies</Text>
            </View>
      );
};

export default DiscoverMovies;