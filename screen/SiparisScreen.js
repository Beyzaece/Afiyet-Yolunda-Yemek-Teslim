import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useOrders } from './OrdersContext';

const SiparisScreen = () => {
  const { orders } = useOrders();

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.menuItem.image }} style={styles.orderItemImage} />
      <View style={styles.orderItemInfo}>
        <Text style={styles.orderItemName}>{item.menuItem.name}</Text>
        <Text style={styles.orderItemPrice}>{item.menuItem.price} </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Siparişlerim</Text>
      {orders.length === 0 ? (
        <Text style={styles.emptyText}>Henüz bir siparişiniz yok.</Text>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.menuItem.id.toString()}
        />
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
  emptyText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  orderItem: {
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
  orderItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  orderItemInfo: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItemPrice: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
});

export default SiparisScreen;
