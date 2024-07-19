// OrderScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useCart } from './CartContext';
import { useOrders } from './OrdersContext';

const OrderScreen = ({ route, navigation }) => {
  const { menuItem } = route.params;
  const { addToCart } = useCart();
  const { addOrder } = useOrders();
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleOrderSubmit = () => {
    const newOrder = {
      menuItem,
      quantity,
      customerName,
      address,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    };
    addOrder(newOrder);
    ToastAndroid.show('Sipariş başarıyla oluşturuldu', ToastAndroid.SHORT);
    navigation.navigate('Siparis');
  };

  const handleAddToCart = () => {
    const orderItem = {
      menuItem: menuItem,
      quantity,
      customerName,
      address,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    };
    addToCart(orderItem);
    ToastAndroid.show('Sepete eklendi', ToastAndroid.SHORT);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sipariş Oluştur</Text>
      <Text style={styles.menuItemName}>{menuItem.name}</Text>
      <Text style={styles.menuItemPrice}>{menuItem.price}</Text>
      <TextInput
        style={styles.input}
        placeholder="Adınız"
        value={customerName}
        onChangeText={setCustomerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresiniz"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Adet"
        keyboardType="numeric"
        value={String(quantity)}
        onChangeText={(text) => setQuantity(Number(text))}
      />
      <Text style={styles.paymentTitle}>Ödeme Yöntemi</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Nakit" value="cash" />
          <Picker.Item label="Kredi/Banka Kartı" value="card" />
        </Picker>
      </View>
      {paymentMethod === 'card' && (
        <View style={styles.cardDetailsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Kart Numarası"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Son Kullanma Tarihi (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleOrderSubmit}>
        <Text style={styles.buttonText}>Siparişi Tamamla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ea',
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#6200ea',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
  },
  picker: {
    width: '100%',
  },
  cardDetailsContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
