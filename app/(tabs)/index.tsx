import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const categories =[
  {id: 1, title: 'Restaurant', Image: require('@/assets/images/resto.png')},
  {id: 2, title: 'Market', Image: require('@/assets/images/market.png')},
  {id: 3, title: 'Pharmacy', Image: require('@/assets/images/pharmacy.png')},
  {id: 4, title: 'Pet', Image: require('@/assets/images/pet.png')},
  {id: 5, title: 'Store', Image: require('@/assets/images/store.png')},
  {id: 6, title: 'Liquor', Image: require('@/assets/images/liqour.png')},
  {id: 7, title: 'Coins', Image: require('@/assets/images/coins.png')},
  {id: 8, title: 'Travel', Image: require('@/assets/images/travel.png')},

]
const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="What do you want today"
          placeholderTextColor="#32333a"
          style={styles.input}
        />
        <Ionicons name="search"size={22} color="#32333a"/>
      </View>
      <View style={styles.categoriesContainer}>
        {categories.map((item) => (
          <View key={item.id} style={styles.categoryItem}>
            <Image source={item.Image} resizeMode='contain' style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 20,
  },

  searchContainer: {
    width: '80%',
    height: 50,
    borderColor: '#52FFCB',
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  categoriesContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
  },
  categoryItem: {
    width: '22%', 
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#575861',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});