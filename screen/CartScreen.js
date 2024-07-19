import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import { useOrders } from './OrdersContext'; 

const CartScreen = () => {
  const { cart, removeFromCart } = useCart();
  const navigation = useNavigation();
  const { addOrder } = useOrders(); 

  if (!cart) {
    return <Text>Sepetiniz yükleniyor...</Text>;
  }

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.menuItem.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.menuItem.name}</Text>
        <Text style={styles.cartItemPrice}>{item.menuItem.price}</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.menuItem.id)}>
          <Text style={styles.removeButton}>Kaldır</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleCheckout = () => {
    cart.forEach((item) => {
      
      addOrder(item.menuItem, item.quantity);
    });

    navigation.navigate('Siparis');
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.menuItem.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sepetimdeki Ürünler</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Sepetinizde ürün yok.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.menuItem.id.toString()}
            contentContainerStyle={styles.cartList}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Toplam: {getTotalPrice()} TL</Text>
          </View>
          <TouchableOpacity 
            style={styles.checkoutButton} 
            onPress={handleCheckout}>
            <Text style={styles.checkoutButtonText}>Satın Al</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
  removeButton: {
    fontSize: 14,
    color: 'red',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
