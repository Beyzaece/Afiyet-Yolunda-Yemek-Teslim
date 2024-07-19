// useRestaurantLister.js
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./src/firebase";

// Firestore koleksiyon referansını oluştur
const restaurantRef = collection(db, "restaurant");

// Firestore koleksiyonunu dinlemek için özel bir kancayı oluştur
export const useRestaurantLister = () => {
  useEffect(() => {
    const unsubscribe = onSnapshot(restaurantRef, (snapshot) => {
      console.log("Restaurant list updated:", snapshot.docs.map((doc) => doc.data()));
    });

    // Bileşen kaldırıldığında dinleyiciyi temizle
    return () => unsubscribe();
  }, []);
};