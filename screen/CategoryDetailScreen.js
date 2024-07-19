import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../src/firebase';

const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'restaurant'), snapshot => {
      const restaurants = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRestaurantData(restaurants);
    });

    return () => unsubscribe();
  }, []);

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant });
  };

  // Kategorilere göre restoranları gruplamak için bir obje oluştur
  const groupedRestaurants = restaurantData.reduce((grouped, restaurant) => {
    const categoryId = restaurant.restaurantId;
    if (!grouped[categoryId]) {
      grouped[categoryId] = [];
    }
    grouped[categoryId].push(restaurant);
    return grouped;
  }, {});

  // Seçilen kategoriye ait restoranları al
  const categoryRestaurants = groupedRestaurants[category.restaurantId] || [];
console.log('categoryRestaurants:', categoryRestaurants);
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryRestaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleRestaurantPress(item)}
            style={styles.restaurantCard}>
            <Image source={{ uri: item.image }} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <View style={styles.additionalInfo}>
                <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
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
  },
  restaurantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  restaurantImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  deliveryTime: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#FFD700',
  },
});

export default CategoryDetailScreen;