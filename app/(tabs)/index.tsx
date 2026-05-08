import React from 'react';
import { Image, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <View>
    <View style={styles.searchContainer}>
      <TextInput
        placeholder='What do you want today'
        placeholderTextColor='#575861'
      />
      <Ionicons name='search' size={24} color='gray' />
    </View>
  </View>
);

const styles = StyleSheet.create({
  searchContainer:{
    width: '70%',
    height: 48,
    color: '#575861',
    borderColor: '#52FFCB',
    borderWidth: 2, 
    borderRadius: 25,
    alignSelf:'center',
    textAlign: 'center',
    top: 200,
  }

})

export default App;