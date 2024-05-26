import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  const renderMenu = ({ item }) => (
    <View style={styles.menuItemContainer}>
      <Image source={item.image} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={restaurant.image} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <Image source={restaurant.menuImage} style={styles.restaurantMenuImage} />
      <Text style={styles.menuTitle}>Menüler</Text>
      <FlatList
        data={restaurant.menus}
        renderItem={renderMenu}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
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
    textAlign: 'center',
  },
  restaurantMenuImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  menuInfo: {
    flex: 1,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuPrice: {
    fontSize: 14,
    color: 'gray',
  },
});

export default RestaurantDetail;
