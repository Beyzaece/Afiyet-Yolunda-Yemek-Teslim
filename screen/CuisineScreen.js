import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const CuisineScreen = ({ route }) => {
  const { cuisine } = route.params;
  const navigation = useNavigation();
  const cuisineRestaurants = {
    Burger: [
      { id: 10, name: 'Balta Burger', image: require('../assets/balta.png') },
      { id: 20, name: 'Burger King', image: require('../assets/burgerking.png') },
      { id: 21, name: 'McDonalds', image: require('../assets/mc.png') },
      { id: 22, name: 'Popeyes', image: require('../assets/popeyes.png') },
      { id: 23, name: 'Bycan Burger House', image: require('../assets/bycan.png') },
      { id: 24, name: 'Burger Buffss', image: require('../assets/buf.png') },
    ],
    Döner: [
      { id: 4, name: 'Öncü Döner', image: require('../assets/öncü.png') },
      { id: 5, name: 'Maydonoz Döner', image: require('../assets/maydonez.png') },
      { id: 7, name: 'Hot Döner', image: require('../assets/hotdoner.png') },
    ],
    Pizza: [
      { id: 3, name: 'Dominos Pizza', image: require('../assets/dominos.png') }, 
      { id: 25, name: 'Pasaport Pizza', image: require('../assets/pasaport.png') },
    { id: 26, name: 'Sbarro Pizza', image: require('../assets/sbarro.png') },
    ],
    Kebap : [
      { id: 15, name: 'Adana Kebapçısı', image: require('../assets/adanakebapçısı.png') }, 
      { id: 27, name: 'Bursa İskender Kebapçısı', image: require('../assets/bursis.png') },
      { id: 31, name: 'Öz Tescilli Adana Kebapçısı', image: require('../assets/öztescil.png') },
      { id: 28, name: 'Çırahan Kilo Mangal', image: require('../assets/çırahankilo.png') },
      { id: 29, name: 'Ulaş Et Lokantası', image: require('../assets/ulaşet.png') },
    ],
    PideLahmacun:[
      { id: 11, name: 'Köfteci Korkmaz Usta', image: require('../assets/köfteci.png') },
      { id: 12, name: 'Tadım Lahmacun', image: require('../assets/tadımlahmacun.png') },
      { id: 17, name: 'Usta Pideci', image: require('../assets/ustapideci.png') },
      { id: 33, name: 'Dayı Kürek Lahmacun', image: require('../assets/dayıkürek.png') },

    ],
    Çiğköfte: [
      { id: 6, name: 'Komagene', image: require('../assets/komagene.png') },
      { id: 8, name: 'Elaziz Çiğköfte', image: require('../assets/elaziz.png') },
    
    ],
    DünyaMutfağı: [
      { id: 3, name: 'Dominos Pizza', image: require('../assets/dominos.png') }, 
      { id: 25, name: 'Pasaport Pizza', image: require('../assets/pasaport.png') },
      { id: 26, name: 'Sbarro Pizza', image: require('../assets/sbarro.png') },
      { id: 10, name: 'Balta Burger', image: require('../assets/balta.png') },
      { id: 14, name: 'Niyokki', image: require('../assets/niyokki.png') },
      { id: 20, name: 'Burger King', image: require('../assets/burgerking.png') },
      { id: 21, name: 'McDonalds', image: require('../assets/mc.png') },
      { id: 22, name: 'Popeyes', image: require('../assets/popeyes.png') },
      { id: 23, name: 'Bycan Burger House', image: require('../assets/bycan.png') },
      { id: 24, name: 'Burger Buffss', image: require('../assets/buf.png') },
      { id: 2, name: 'Tavuk Dünyası', image: require('../assets/yemek2.jpeg') },
    ],
    KahvaltıveBörek: [
      { id: 1, name: 'Deniz Dalgası Kahvaltı Salonu', image: require('../assets/yemek.jpeg') }, 
      { id: 16, name: 'Çiçek Börek', image: require('../assets/cicekborek.png') },
    ],
    PastaFırın: [
      { id: 32, name: 'Bolulu Hasan Usta', image: require('../assets/bolulu.png') },
      { id: 16, name: 'Çiçek Börek', image: require('../assets/cicekborek.png') },
      { id: 30, name: 'Boston Drink Dessert', image: require('../assets/boston.png') },
      { id: 18, name: 'Özsüt', image: require('../assets/özsüt.png') },
    { id: 19, name: 'Cadının Evi', image: require('../assets/cadı.png') },
    { id: 9, name: 'Buhara Kadayıf', image: require('../assets/kadayıf.png') },
    ],
    DenizÜrünleri: [
      { id: 13, name: 'Keban Su Ürünleri', image: require('../assets/kebansu.png') },
    ],
    Tatlı:[
      { id: 32, name: 'Bolulu Hasan Usta', image: require('../assets/bolulu.png') },
      { id: 30, name: 'Boston Drink Dessert', image: require('../assets/boston.png') },
      { id: 18, name: 'Özsüt', image: require('../assets/özsüt.png') },
    { id: 19, name: 'Cadının Evi', image: require('../assets/cadı.png') },
    { id: 9, name: 'Buhara Kadayıf', image: require('../assets/kadayıf.png') },

    ]

  };
  const restaurants = cuisineRestaurants[cuisine.name];
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cuisine.name} Restoranları</Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRestaurantPress(item)}>
          <View style={styles.restaurantCard}>
            <Image source={item.image} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 10,
  },
  restaurantCard: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});

export default CuisineScreen;
