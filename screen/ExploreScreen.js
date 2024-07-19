import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const restaurants = [
  { id: 1, name: 'Restoran 1', cuisine: 'Mediterranean' },
  { id: 2, name: 'Restoran 2', cuisine: 'Italian' },
  { id: 3, name: 'Restoran 3', cuisine: 'Mexican' },
  // Restoran verilerini buraya ekleyin
];

const ExploreScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.cuisine}>{item.cuisine}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cuisine: {
    fontSize: 14,
  },
});

export default ExploreScreen;
