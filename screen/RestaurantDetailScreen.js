import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../src/firebase';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const navigation = useNavigation();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const q = query(collection(db, 'menus'), where('restaurantId', '==', restaurant.restaurantId));
        const querySnapshot = await getDocs(q);
        const menuItems = [];
        querySnapshot.forEach((doc) => {
          menuItems.push({ id: doc.id, ...doc.data() });
        });
        setMenus(menuItems);
      } catch (error) {
        console.error("Error fetching menus: ", error);
      }
    };

    fetchMenus();
  }, [restaurant.restaurantId]);

  const handleMenuItemPress = (menuItem) => {
    navigation.navigate('Order', { menuItem });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <Text style={styles.menuTitle}>Menüler</Text>
      <ScrollView>
        {menus.map((menu) => (
          <TouchableOpacity key={menu.id} onPress={() => handleMenuItemPress(menu)} style={styles.menuItemContainer}>
            <Image source={{ uri: menu.image }} style={styles.menuImage} />
            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>{menu.name}</Text>
              <Text style={styles.menuPrice}>{menu.price}</Text>
              {menu.description && <Text style={styles.menuDescription}>{menu.description}</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
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
    color: '#6200ea',
    marginTop: 5,
  },
  menuDescription:{
    fontSize:12,
    color:'gray',
    marginTop:5,
  }
});

export default RestaurantDetailScreen;