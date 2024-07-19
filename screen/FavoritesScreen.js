import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = ({ route }) => {
  const { favorites, restaurantData, toggleFavorite } = route.params;
  const navigation = useNavigation();

  const favoriteRestaurants = restaurantData.filter(restaurant => favorites.includes(restaurant.id));

  const renderFavoriteCard = ({ item }) => {
    return (
      <View style={styles.restaurantCard}>
        <Image source={{ uri: item.image }} style={styles.restaurantImage} />
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <View style={styles.additionalInfo}>
            <Ionicons name="time-outline" size={16} color="gray" style={styles.icon} />
            <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
            <Ionicons name="star" size={16} color="#FFD700" style={styles.icon} />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteIconContainer}>
          <Ionicons name='heart' size={24} color='red' />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRestaurants}
        renderItem={renderFavoriteCard}
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
  favoriteIconContainer: {
    marginLeft: 20,
  },
  icon: {
    marginLeft: 5,
  },
});

export default FavoritesScreen;