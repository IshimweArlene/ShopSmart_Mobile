import React from 'react';
import { Image, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (
  <View>
    <View>
      <TextInput
        placeholder='What do you want today'
        style={styles.searchContainer}
        placeholderTextColor='#575861'
        />
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
    alignSelf:'center'
  }

})

export default App;