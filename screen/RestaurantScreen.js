import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const RestaurantScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View style={styles.container}>
      <Image source={restaurant.image} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <Text style={styles.deliveryTime}>Teslim Süresi: {restaurant.deliveryTime}</Text>
      <Text style={styles.rating}>Puan: {restaurant.rating} ⭐</Text>
      <FlatList
        data={restaurant.menu}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price} TL</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  deliveryTime: {
    fontSize: 16,
    color: '#555',
  },
  rating: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemName: {
    fontSize: 18,
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantScreen;