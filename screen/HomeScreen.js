import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation=useNavigation();
  const [restaurantData, setRestaurantData] = useState([
    { 
      id: 1, 
      name: 'Deniz Dalgası Kahvaltı Salonu', 
      image: require('../assets/yemek.jpeg'),
      menuImage: require('../assets/menukahvaltı.png'),
      menus: [
        { id: 1, name: 'Kahvaltı Tabağı', image: require('../assets/kahvaltıtab.png'), price: '240 TL' },
        { id: 2, name: 'Omlet', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 3, name: 'Peynirli Sigara Böreği', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 4, name: 'Pişi', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 5, name: 'Krep', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 6, name: 'Menemen', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 7, name: 'Tost', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 8, name: 'Sandviç', image: require('../assets/omlet.png'), price: '85 TL' },
        { id: 9, name: 'Hamburger', image: require('../assets/omlet.png'), price: '85 TL' },
        
      ]},
      { 
        id: 2, 
        name: 'Tavuk Dünyası', 
        image: require('../assets/yemek2.jpeg'),
        menuImage: require('../assets/menutavukd.png'),
        menus: [
          { id: 1, name: 'Şefin Tavası', image: require('../assets/şefintavası.png'), price: '180 TL' },
          { id: 2, name: 'Mantar Soslu', image: require('../assets/mantarlı.png'), price: '180 TL' },
          { id: 3, name: 'Acılı Bi Köri', image: require('../assets/omlet.png'), price: '260 TL',description:"Acılı Köri Soslu Tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 4, name: 'Alinazik Tavuk', image: require('../assets/omlet.png'), price: '260 TL',description:"Alinazik üzerine soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 5, name: 'Baharatlım(Acılı)', image: require('../assets/omlet.png'), price: '260 TL',description:"Baharatlım soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 6, name: 'Barbeküs', image: require('../assets/omlet.png'), price: '260 TL',description:"Barbeküs soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 7, name: 'Cafe de Paris Soslu Tavuk', image: require('../assets/omlet.png'), price: '260TL',description:"Cafe de Paris soslu tavuk. Özel soslu makarna,akdeniz salata"  },
          { id: 8, name: 'Bi Margarita', image: require('../assets/omlet.png'), price: '490TL',description:"Margarita soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 9, name: 'Kekiklim Et', image: require('../assets/omlet.png'), price: '490 TL',description:"Özel kekik,peynir ve kremalı özel sosla harmanlanan et özel soslu makarna akdeniz salatası ile" },
          { id: 10, name: 'Barbeküs Et', image: require('../assets/omlet.png'), price: '490 TL',description:"Özel baharatlar ile marine edilmiş kontrfile et,barbekü sus,kaliforniya biberi,makarna ve akdeniz salatası ile" },
          { id: 11, name: 'Kendini Beğenmiş Köfte', image: require('../assets/omlet.png'), price: '390 TL',description:"Beğendi üzerine ızgara köfte, Özel soslu makarna,akdeniz salata" },
          { id: 12, name: 'Mangal Köfte', image: require('../assets/omlet.png'), price: '390 TL' ,description:"Izgara köfte. Özel soslu makarna,akdeniz salata"},
          { id: 13, name: 'Sezarım Tavuklum Salata', image: require('../assets/omlet.png'), price: '220 TL',description:"Taze göbek marul, sezar sos, kruton ekmeğ,çeri domates,parmesan peyniri ve sote jülyen tavuk parçaları ile hazırlanmış Sezar salata" },
          { id: 14, name: 'Tek Kişilik Ziyafet Menüsü', image: require('../assets/omlet.png'), price: '85 TL' ,description:"Tavuk+ Kutu İçecek"},
          { id: 15, name: 'Dört Dörtlük Menü', image: require('../assets/omlet.png'), price: '85 TL' ,description:"4 adet Tavuk+ Kutu İçecek"},
          { id: 16, name: 'Karışık Başlangıç Tabağı', image: require('../assets/omlet.png'), price: '200 TL',description:"Çıtır tavuk,mozerella sticks,cheddarlı patates topları,patates kızartması" },
          { id: 17, name: 'Klasik Patates Kızartması', image: require('../assets/omlet.png'), price: '95 TL' ,description:"İnce dilimlenmiş klasik patatesler"},
          { id: 18, name: 'Beğendi', image: require('../assets/omlet.png'), price: '105 TL' ,description:"Közlenmiş patlıcanlar, kaşar peyniri"},
          { id: 19, name: 'Cheddarlı Patates Topları', image: require('../assets/omlet.png'), price: '125 TL' ,description:"Patates, cheddar peyniri"},
          
        ]
      },
      { id: 3,
         name: 'Dominos Pizza', 
         image: require('../assets/dominos.png'), 
         menuImage: require('../assets/menutavukd.png'),
        menus: [
          { id: 1, name: '2 Orta boy süperos ve litrelik içecek ', image: require('../assets/şefintavası.png'), price: '180 TL' },
          { id: 2, name: 'Orta Boy Pizza ve kutu içecek ', image: require('../assets/mantarlı.png'), price: '180 TL' },
          { id: 3, name: '2 orta boy bol malzemos', image: require('../assets/omlet.png'), price: '260 TL',description:"Acılı Köri Soslu Tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 4, name: 'Büyük Boy pizza Fırsatı', image: require('../assets/omlet.png'), price: '260 TL',description:"Alinazik üzerine soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 5, name: 'Pizza XL', image: require('../assets/omlet.png'), price: '320 TL',description:"Baharatlım soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 6, name: 'Pizza XL ve Litrelik İçecek', image: require('../assets/omlet.png'), price: '380 TL',description:"Barbeküs soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 7, name: '2 Adet Dürümos', image: require('../assets/omlet.png'), price: '150TL',description:"Cafe de Paris soslu tavuk. Özel soslu makarna,akdeniz salata"  },
          { id: 8, name: 'Tavuk Fırsatı', image: require('../assets/omlet.png'), price: '600TL',description:"Margarita soslu tavuk. Özel soslu makarna,akdeniz salata" },
          { id: 9, name: 'Domdom Burger ve Orta Boy Patates', image: require('../assets/omlet.png'), price: '150 TL',description:"Özel kekik,peynir ve kremalı özel sosla harmanlanan et özel soslu makarna akdeniz salatası ile" },
         
        ]
        },
    { id: 4,
       name: 'Öncü Döner', 
       image: require('../assets/öncü.png'),
       menuImage: require('../assets/menutavukd.png'),
       menus: [
         { id: 1, name: 'Zurna Tavuk Döner Dürüm (120 gr) ', image: require('../assets/şefintavası.png'), price: '169,90 TL',description:"120 gr. tavuk döner, patates kızartması, turşu, özel öncü sos, sarımsaklı mayonez" },
         { id: 2, name: 'Tavuk Döner Dürüm (80 gr) ', image: require('../assets/mantarlı.png'), price: '129,90 TL' ,description:"80 gr. tavuk döner, patates kızartması, turşu, özel öncü sos, sarımsaklı mayonez"},
         { id: 3, name: 'Avantajlı Tavuk Döner Dürüm Menü', image: require('../assets/omlet.png'), price: '204,99 TL',description:"80 gr. tavuk döner + Patates Kızartması + Sütaş Ayran" },
         
         { id: 4, name: ' Combo Zurna Tavuk Döner Dürüm Menü', image: require('../assets/omlet.png'), price: '249,90 TL',description:"Zurna tavuk döner + Patates Kızartması + İçecek" },
         { id: 5, name: 'Pizza XL ve Litrelik İçecek', image: require('../assets/omlet.png'), price: '380 TL',description:"Barbeküs soslu tavuk. Özel soslu makarna,akdeniz salata" },
         { id: 6, name: '2 Adet Dürümos', image: require('../assets/omlet.png'), price: '150TL',description:"Cafe de Paris soslu tavuk. Özel soslu makarna,akdeniz salata"  },
         { id: 7, name: 'Tavuk Fırsatı', image: require('../assets/omlet.png'), price: '600TL',description:"Margarita soslu tavuk. Özel soslu makarna,akdeniz salata" },
         ]
       },
    { id: 5,
       name: 'Maydonoz Döner',
      image: require('../assets/maydonez.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
        { id: 1, name: 'XLarge Tavuk Döner Dürüm Menü ', image: require('../assets/şefintavası.png'), price: '200 TL',description:"Tavuk Döner XLarge Dürüm + Kutu İçecek" },
        { id: 2, name: 'Tavuk Döner Medium Dürüm ', image: require('../assets/mantarlı.png'), price: '150 TL' ,description:"Özel fırın lavaşa; 75 gr. tavuk döner, salatalık turşusu, patates kızartması, özel sos, isteğe göre soğan, sarımsaklı mayonez sos cin biberi ile"},
        { id: 3, name: 'Tavuk Döner Small Dürüm ', image: require('../assets/omlet.png'), price: '125 TL',description:"Özel fırın lavaşa; 50 gr. tavuk döner, salatalık turşusu, patates kızartması, özel sos, isteğe göre soğan, sarımsaklı mayonez sos cin biberi ile" },
       { id: 4, name: 'Maytako (Tavuk Dönerden) 2 Adet', image: require('../assets/omlet.png'), price: '170 TL',description:"2 Adet Maytako (50 gr tavuk döner, tortilla lavaş, chedar peyniri, salatalık turşusu, patates kızartması,soğan, acılı sarımsaklı mayonez sos." },
        { id: 5, name: 'Maytako (Et Dönerden) 2 Adet', image: require('../assets/omlet.png'), price: '260 TL',description:"2 Adet Maytako (50 gr et döner, tortilla lavaş, chedar peyniri, salatalık turşusu, patates kızartması,soğan, acılı sarımsaklı mayonez sos." },
        { id: 6, name: '2li Maytako (Tavuk Dönerden) ', image: require('../assets/omlet.png'), price: '245TL',description:"2 Adet Maytako Tavuk Döner + Külah Patates Kızartması+ Ayran"  },
]     
     },
    { id: 6,
      name: 'Komagene',
      image: require('../assets/komagene.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
        { id: 1, name: 'Mega Doy! Menü ', image: require('../assets/şefintavası.png'), price: '178 TL',description:"2 Adet Mega Çiğ Köfte Dürüm + 2 Adet Komagene Ayran" },
        { id: 2, name: 'Komagene Şuşi (Doritoslu) ', image: require('../assets/mantarlı.png'), price: '105 TL' ,description:"Dolgun Lavaş ,100 gr. çiğ köfte, roka, maydanoz, nane, salatalık turşusu, salatalık,havuç,mor soğan,burger sos, Doritos taco"},
        { id: 3, name: 'Çiğ Köfte Dürüm ', image: require('../assets/omlet.png'), price: '59 TL',description:"90 gr. çiğ köfte, tek lavaş, seçeceğiniz 5 çeşit garnitür, iki çeşit sos" },
        { id: 4, name: 'Komagene Şuşi (Fındıklı)', image: require('../assets/omlet.png'), price: '170 TL',description:"Dolgun Lavaş ,100 gr. çiğ köfte, roka, maydanoz, nane, salatalık turşusu, salatalık,havuç,mor soğan,burger sos, fındık" },
        { id: 5, name: 'Çiğ Köfte (200 gr.)', image: require('../assets/omlet.png'), price: '260 TL',description:"2 Adet Maytako (50 gr et döner, tortilla lavaş, chedar peyniri, salatalık turşusu, patates kızartması,soğan, acılı sarımsaklı mayonez sos." },
        { id: 6, name: 'Çiğ Köfte (400 gr.)', image: require('../assets/omlet.png'), price: '245TL',description:"2 Adet Maytako Tavuk Döner + Külah Patates Kızartması+ Ayran"  },
        { id: 7, name: 'Favori Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '80 TL',description:"Favori Çiğ Köfte Dürüm (90 gr. çiğ köfte, tek lavaş, göbek marul, mısır, maydanoz, nane, salatalık turşusu, közlenmiş biber, mor lahana, ekşi çiğ köfte sosu, limon ve çiğ köfte sosu) + Komagene Ayran (17 cl.)"  },
        { id: 8, name: 'Favori Mega Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '90 TL',description:"Favori Mega Çiğ Köfte Dürüm (125 gr. çiğ köfte, çift lavaş, göbek marul, mısır, maydanoz, nane, salatalık turşusu, közlenmiş biber, mor lahana, ekşi çiğ köfte sosu, limon ve çiğ köfte sosu) + Komagene Ayran (17 cl.)"  },
        { id: 9, name: 'Favori Ultra Mega Dürüm Menü', image: require('../assets/omlet.png'), price: '100 TL',description:"Favori Ultra Mega Dürüm (150 gr. çiğ köfte, çift lavaş, göbek marul, mısır, maydanoz, nane, salatalık turşusu, közlenmiş biber, mor lahana, ekşi çiğ köfte sosu, limon ve çiğ köfte sosu) + Komagene Ayran (17 cl.)"  },
        { id: 10, name: 'Favori Double Dürüm Menü', image: require('../assets/omlet.png'), price: '110 TL',description:"Favori Double Dürüm (175 gr. çiğ köfte, çift lavaş, göbek marul, mısır, maydanoz, nane, salatalık turşusu, közlenmiş biber, mor lahana, ekşi çiğ köfte sosu, limon ve çiğ köfte sosu) + Komagene Ayran (17 cl.)"  },
        { id: 11, name: 'Flamin Hot Doritoslu Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '87 TL',description:"Flamin' Hot Doritos'lu Çiğ Köfte Dürüm (90 gr. çiğ köfte, Doritos Flamin' Hot, tek lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 12, name: 'Flamin Hot Doritoslu Double Dürüm Menü', image: require('../assets/omlet.png'), price: '119 TL',description:"Flamin' Hot Doritos'lu Double Dürüm (175 gr. çiğ köfte, Doritos Flamin' Hot , çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 13, name: 'Flamin Hot Doritoslu Mega Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '99 TL',description:"Flamin' Hot Doritos'lu Mega Çiğ Köfte Dürüm (125 gr. çiğ köfte, Doritos Flamin' Hot , çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 14, name: 'Flamin Hot Doritoslu Ultra Mega Dürüm Menü', image: require('../assets/omlet.png'), price: '109 TL',description:"Flamin' Hot Doritos'lu Ultra Mega Dürüm (150 gr. çiğ köfte, Doritos Flamin' Hot, çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 15, name: 'Bi Tatlı Fırsat Menü', image: require('../assets/omlet.png'), price: '99 TL',description:"Mega Çiğ Köfte Dürüm (125 gr. çiğ köfte, çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.) + Danette"  },
        { id: 16, name: 'Doritoslu Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '87 TL',description:"Doritos'lu Çiğ Köfte Dürüm (90 gr. çiğ köfte, Doritos tako, tek lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 17, name: 'Doritoslu Double Çiğ Köfte Dürüm Menü', image: require('../assets/omlet.png'), price: '119 TL',description:"Doritos'lu Double Dürüm (175 gr. çiğ köfte, Doritos tako, çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
        { id: 18, name: 'Doritoslu Ultra Mega Dürüm Menü', image: require('../assets/omlet.png'), price: '109 TL',description:"Doritos'lu Ultra Mega Dürüm (150 gr. çiğ köfte, Doritos tako, çift lavaş, seçeceğiniz 5 çeşit garnitür, seçeceğiniz 2 çeşit sos) + Komagene Ayran (17 cl.)"  },
       
      ]

     },
    { id: 7, 
      name: 'Hot Döner', 
      image: require('../assets/hotdoner.png') ,
      menuImage: require('../assets/menutavukd.png'),
      menus: [
        { id: 1, name: 'Tavuk Maxi Dürüm (45 cm.) ', image: require('../assets/şefintavası.png'), price: '184TL',description:"2 adet kızarmış lavaş ekmeğine; 100 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez" },
        { id: 2, name: 'Tavuk Midi Dürüm ', image: require('../assets/mantarlı.png'), price: '139 TL' ,description:"Kızarmış lavaş ekmeğine; 70 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez"},
        { id: 3, name: 'Tavuk Jumbo Dürüm', image: require('../assets/omlet.png'), price: '166 TL',description:"1,5 kızarmış lavaş ekmeğine; 90 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez" },
        { id: 4, name: 'Tavuk Eko Dürüm', image: require('../assets/omlet.png'), price: '121 TL',description:"Kızarmış lavaş ekmeğine; 50 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez" },
        { id: 5, name: 'Coca-Cola Fırsatı (2li Tavuk Jumbo Dürüm)', image: require('../assets/omlet.png'), price: '338 TL',description:"2 Adet Tavuk Jumbo Dürüm + 2 Adet Coca-Cola (33 cl.)" },
        { id: 6, name: 'Tombik Ekmek Arası Tavuk Döner', image: require('../assets/omlet.png'), price: '112,50 TL',description:"Tombik ekmek arası; 50 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez"  },
        { id: 8, name: 'Yarım Ekmek Arası Tavuk Döner', image: require('../assets/omlet.png'), price: '112,50 TL',description:"Yarım ekmek arasına; 50 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez"  },
        { id: 9, name: 'Tavuk Eko Dürüm Menü', image: require('../assets/omlet.png'), price: '184 TL',description:"Tavuk Eko Dürüm (Kızarmış lavaş ekmeğine; 50 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + Küçük Boy Patates Kızartması + Kutu İçecek"  },
        { id: 10, name: 'Tavuk Midi Dürüm Menü', image: require('../assets/omlet.png'), price: '202 TL',description:"Tavuk Midi Dürüm (Kızarmış lavaş ekmeğine; 70 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + Küçük Boy Patates Kızartması + Kutu İçecek"  },
        { id: 11, name: 'Tavuk Jumbo Dürüm Menü', image: require('../assets/omlet.png'), price: '229 TL',description:"Tavuk Jumbo Dürüm (Kızarmış 1,5 lavaş ekmeğine; 90 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + Küçük Boy Patates Kızartması + Kutu İçecek"  },
        { id: 12, name: 'Tombik Ekmek Arası Tavuk Döner Menü', image: require('../assets/omlet.png'), price: '175,50 TL',description:"Tombik Ekmek Arası Tavuk Döner (Tombik ekmek arası; 50 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + Küçük Boy Patates Kızartması + Kutu İçecek"  },
        { id: 13, name: '2li Tavuk Midi Menü', image: require('../assets/omlet.png'), price: '279 TL',description:"2 Adet Tavuk Midi Dürüm (Kızarmış lavaş ekmeğine; 70 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + İçecek (1 L.)"  },
        { id: 14, name: '2li Tavuk Maxi Dürüm (45 cm.) Menü', image: require('../assets/omlet.png'), price: '369 TL',description:"2 Adet Tavuk Maxi Dürüm (45 cm.) (2 adet kızarmış lavaş ekmeğine; 100 gr. tavuk döner, Hot Döner tavuk sosu, patates kızartması, dilim kornişon turşu, mayonez) + Coca-Cola (1 L.)"  },
        
      ]

     },

    { id: 8, 
      name: 'Elaziz Çiğköfte', 
      image: require('../assets/elaziz.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
        { id: 1, name: 'Çiğ Köfte Dürüm ', image: require('../assets/şefintavası.png'), price: '60 TL',description:"Çiğ köfte (100 g), yeşillik, turşu, acı sos, nar ekşisi, limon ve domates" },
        { id: 2, name: 'Mega Çiğ Köfte Dürüm  ', image: require('../assets/mantarlı.png'), price: '80 TL' ,description:"Çiğ köfte (150 g), yeşillik, turşu, acı sos, nar ekşisi, limon ve domates"},
        { id: 3, name: 'Çiğ Köfte (10 sıkım)', image: require('../assets/omlet.png'), price: '90 TL',description:"Yeşillik, lavaş, turşu, acı sos ve nar ekşisi ile" },
        { id: 4, name: 'Çiğ Köfte (500 g)', image: require('../assets/omlet.png'), price: '180 TL',description:"Yeşillik, lavaş, turşu, acı sos ve nar ekşisi ile" },
        { id: 5, name: 'Çiğ Köfte (1 kg)', image: require('../assets/omlet.png'), price: '360 TL',description:"Yeşillik, lavaş, turşu, acı sos ve nar ekşisi ile" },
        { id: 6, name: 'Çiğ Köfte (500 g)', image: require('../assets/omlet.png'), price: '270 TL',description:"Yeşillik, lavaş, turşu, acı sos ve nar ekşisi ile"  },
       
      ] },
    { id: 9,
      name: 'Buhara Kadayıf', 
      image: require('../assets/kadayıf.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
        { id: 1, name: 'Fıstıklı Soğuk Baklava (500 gr.) ', image: require('../assets/şefintavası.png'), price: '200 TL',description:"Antep fıstığı, çikolata, süt" },
        { id: 2, name: 'Cevizli Soğuk Baklava (500 gr.) ', image: require('../assets/mantarlı.png'), price: '170 TL' ,description:"Kaymak, tel kadayıf,şerbet "},
        { id: 3, name: 'Cevizli Soğuk Baklava (1 kg)', image: require('../assets/omlet.png'), price: '270 TL',description:"ceviz çikolata süt" },
        { id: 4, name: 'Fıstıklı Sütlü Nuriye (500 g)', image: require('../assets/omlet.png'), price: '190 TL' },
        { id: 5, name: 'Çikolatalı Fıstıklı Baklava(170 gr))', image: require('../assets/omlet.png'), price: '75 TL',description:"çikolata, fıstık, şerbet" },
        { id: 6, name: 'Cevizli Kadayıf Tatlısı (170 g)', image: require('../assets/omlet.png'), price: '60 TL',description:"Ceviz, tel kadayıf, şerbet"  },
        { id: 8, name: 'Kaymaklı Kadayıf Tatlısı (170 gr)', image: require('../assets/omlet.png'), price: '50 TL',description:"Kaymak, tel kadayıf, şerbet"  },
        { id: 9, name: 'Antep Sarma Tatlısı (3 Dilim)', image: require('../assets/omlet.png'), price: '80 TL',description:"Fıstık, şerbet, tereyağı"  },
        { id: 10, name: 'Çubuk Fıstıklı Kadayıf', image: require('../assets/omlet.png'), price: '75 TL',description:"Kaymak, tel kadayıf, şerbet"  },
       
      ] },
    { id: 10, 
      name: 'Balta Burger', 
      image: require('../assets/balta.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
      { id: 1, name: 'Kereste Burger', image: require('../assets/şefintavası.png'), price: '270 TL',description:"Köfte (140 g), soğan, mantar, cheddar peyniri, meksikan sos, ranch sos, iceberg marul, kornişon turşu ve özel baharatlı patates kızartması" },
      { id: 2, name: 'Kütük Burger', image: require('../assets/mantarlı.png'), price: '275 TL' ,description:"Köfte (140 g), soğan, patlıcan, kapya biber, dana sucuk, cheddar peyniri, meksikan sos, ranch sos, iceberg marul, kornişon turşu ve özel baharatlı patates kızartması"},
      { id: 3, name: 'Kürek Burger', image: require('../assets/omlet.png'), price: '265 TL',description:"Köftesi (140 g), soğan, kapya biber, meksikan sos, moskvich sos, iceberg marul, kornişon turşu ve özel baharatlı patates kızartması" },
      { id: 4, name: 'XL Kütük Burger', image: require('../assets/omlet.png'), price: '315 TL',description:"Köftesi (140 g), soğan, kapya biber, meksikan sos, moskvich sos, iceberg marul, kornişon turşu ve özel baharatlı patates kızartması" },
      { id: 5, name: 'Meşe Burger', image: require('../assets/omlet.png'), price: '250 TL',description:"Soğan, domates, barbekü sos, ranch sos, kornişon turşu, iceberg marul, tavuk köfte ve özel baharatlı patates kızartması" },
      { id: 6, name: 'Talaş Burger', image: require('../assets/omlet.png'), price: '260 TL',description:"Köfte (140 g), soğan, mantar, iceberg marul, kornişon turşu, meksikan sos, bernez sos ve özel baharatlı patates kızartmasıt"  },
      { id: 8, name: 'Çıra Burger', image: require('../assets/omlet.png'), price: '265 TL',description:"Tavuk köfte (160 g), burger ekmeği, cheddar peyniri, karamelize mantar, karamelize soğan, süs biber, iceberg marul, kornişon turşu, meksikan sos, özel çıra sos ve özel baharatlı patates kızartması"  },
      { id: 9, name: 'Testere Burger', image: require('../assets/omlet.png'), price: '275 TL',description:"Köfte (140 g), közlenmiş patlıcan, karamelize soğan, közlemiş biber, süs biber, iceberg marul, kornişon turşu, meksikan sos, özel çıra sos ve özel baharatlı patates kızartması"  },
      ]
    },
    { id: 11, 
      name: 'Köfteci Korkmaz Usta', 
      image: require('../assets/köfteci.png') ,
      menuImage: require('../assets/menutavukd.png'),
      menus: [
      { id: 1, name: 'Yarım Ekmek Tavuk Biftek', image: require('../assets/şefintavası.png'), price: '55 TL',description:"Yeşillik, salça" },
      { id: 2, name: 'Üç Çeyrek Ekmek Tavuk Biftek', image: require('../assets/mantarlı.png'), price: '105 TL' ,description:"Yeşillik, salça"},
      { id: 3, name: 'Yarım Ekmek Tavuk Döner', image: require('../assets/omlet.png'), price: '55 TL',description:"Yeşillik, ketçap, mayonez" },
      { id: 4, name: 'Üç Çeyrek Ekmek Tavuk Döner', image: require('../assets/omlet.png'), price: '105 TL',description:"Yeşillik, ketçap, mayonez" },
      { id: 5, name: 'Yarım Ekmek Köfte', image: require('../assets/omlet.png'), price: '90 TL',description:"Domates, soğan, maydanoz" },
      { id: 6, name: 'Üç Çeyrek Ekmek Köfte', image: require('../assets/omlet.png'), price: '260 TL',description:"Köfte (140 g), soğan, mantar, iceberg marul, kornişon turşu, meksikan sos, bernez sos ve özel baharatlı patates kızartmasıt"  },
      { id: 8, name: 'Tam Ekmek Köfte', image: require('../assets/omlet.png'), price: '180 TL',description:"Domates, soğan, maydanoz"  },
     ]},
    { id: 12, name: 'Tadın Lahmacun', 
      image: require('../assets/tadımlahmacun.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
      { id: 2, name: 'Üç Lahmacun Menü 1', image: require('../assets/mantarlı.png'), price: '159 TL' ,description:"3 adet lahmacun, mevsim salatası ve ayran (200 ml) ile"},
      { id: 3, name: 'Kuşbaşılı Kaşarlı Pide', image: require('../assets/omlet.png'), price: '170 TL',description:"Mevsim salatası ile" },
      { id: 4, name: 'Urfa Lahmacun', image: require('../assets/omlet.png'), price: '50 TL',description:"Mevsim salatası ile" },
      { id: 5, name: 'Et Döner Dürüm', image: require('../assets/omlet.png'), price: '150 TL'},
      { id: 6, name: 'Peymacun', image: require('../assets/omlet.png'), price: '70 TL',description:"Mevsim salatası ile"  },
      { id: 8, name: 'Sucuklu Pide', image: require('../assets/omlet.png'), price: '160 TL',description:"Mevsim salatası ile"  },
      { id: 2, name: 'Sucuklu Kaşarlı Pide', image: require('../assets/mantarlı.png'), price: '159 TL' ,description:"Mevsim salatası ile"},
      { id: 3, name: 'Karışık Pide', image: require('../assets/omlet.png'), price: '160 TL',description:"Mevsim salatası ile" },
      { id: 4, name: 'Mantarlı pide', image: require('../assets/omlet.png'), price: '50 TL',description:"Mevsim salatası ile" },
      { id: 5, name: 'Kıymalı Pide', image: require('../assets/omlet.png'), price: '150 TL',description:"Mevsim salatası ile"},
      { id: 6, name: 'Adana Kebap', image: require('../assets/omlet.png'), price: '160 TL',description:"Mevsim salatası ile"},
      { id: 8, name: 'Tavuk Kanat', image: require('../assets/omlet.png'), price: '160 TL',description:"Mevsim salatası ile"},
      { id: 5, name: 'İskender', image: require('../assets/omlet.png'), price: '190 TL',description:"Mevsim salatası ile"},
      { id: 6, name: 'Dana Kuşbaşı', image: require('../assets/omlet.png'), price: '190 TL',description:"Mevsim salatası ile"},
      { id: 8, name: 'Tavuk Şiş', image: require('../assets/omlet.png'), price: '160 TL',description:"Mevsim salatası ile"},
     
    
    
    ]
    },
    { id: 13, 
      name: 'Keban Su Ürünleri', 
      image: require('../assets/kebansu.png'),
      menuImage: require('../assets/menutavukd.png'),
      menus: [
      { id: 2, name: 'Çipura Izgara', image: require('../assets/mantarlı.png'), price: '420 TL' ,description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile"},
      { id: 3, name: 'Levrek Izgara', image: require('../assets/omlet.png'), price: '170 TL',description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile" },
      { id: 4, name: 'Alabalık Köfte', image: require('../assets/omlet.png'), price: '250 TL',description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile" },
      { id: 5, name: 'Alabalık Fileto', image: require('../assets/omlet.png'), price: '355TL'},
      { id: 6, name: 'Alabalık Kebap', image: require('../assets/omlet.png'), price: '470 TL',description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile"  },
      { id: 8, name: 'Halka Kalamar Tava', image: require('../assets/omlet.png'), price: '465 TL',description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile"  },
      { id: 2, name: 'Karides Tava', image: require('../assets/mantarlı.png'), price: '465 TL' ,description:"Mevsim salata, soğan söğüş, limon, ekmek (80 g), garnitür ile"},
      
      { id: 5, name: 'Rus Salatası', image: require('../assets/omlet.png'), price: '55 TL'},
      { id: 6, name: 'Kaşık Salata', image: require('../assets/omlet.png'), price: '55 TL'},
      { id: 8, name: 'Çoban Salata', image: require('../assets/omlet.png'), price: '45 TL'},
      { id: 2, name: 'Mevsim Salata', image: require('../assets/mantarlı.png'), price: '45 TL'},
      
    
    ]
    
    
    
    },
    { id: 14, 
      name: 'Niyokki', 
      image: require('../assets/niyokki.png'),menuImage: require('../assets/menutavukd.png'),
      menus: [
      { id: 2, name: 'Bolonez Soslu Niyokki', image: require('../assets/mantarlı.png'), price: '365 TL' ,description:"Dana kıyma, ev yapımı domates sos, sarımsak, soğan, salça, biber, kırmızı toz biber, karabiber ve tereyağı"},
      { id: 3, name: 'Roma Negro', image: require('../assets/omlet.png'), price: '439 TL',description:"Sübyeli tagliatelle makarna, somon, kalamar, karides, panga, pomodoro sos, karides cipsi, kapari, yeşilsoğan, roka, kırmızı soğan, limon kabuğu, küp domates, sarımsak, fındık turp, tereyağı ve kabuk midye" },
      { id: 4, name: 'Dan Etli Penne', image: require('../assets/omlet.png'), price: '379 TL',description:"Dana etş, niyokki mix soya sosu, kapya biberi, kuru soğan, mantar, sarımsak, zencefil, köy biberi, havuç ve tereyağı" },
      { id: 5, name: 'Rimini Bucatini', image: require('../assets/omlet.png'), price: '355TL',description:"Dana biftek, cheddar sos, rendelenmiş mozzarella peyniri, parmesan peyniri, sarımsak, muskat, beyaz karabiber, bitkisel krema ve tereyağı"},
      { id: 6, name: 'Acılı Portofino Penne', image: require('../assets/omlet.png'), price: '367 TL',description:"Antrikot dilimleri, ev yapımı domates sos, kuru soğan, köy biberi, arnavutbiberi, sarımsak, kimyon, karabiber, et suyu ve tereyağı"  },
      { id: 8, name: 'Dana Lokum Bonfile', image: require('../assets/omlet.png'), price: '599 TL',description:"Izgara bonfile dilimleri, kremalı patates ve haşlanmış sebze ile"  },
      { id: 2, name: 'Lucca Usulü Kıymalı Yoğurtlu Niyokki', image: require('../assets/mantarlı.png'), price: '399 TL' ,description:"Kavrulmuş dana kıyma, kuru soğan, kırmızı toz biber, karabiber, tereyağı, ev yapımı domates sos, sarımsak ve yoğurt"},
      
      { id: 5, name: 'Mozerella Peynirli Kuru Domatesli Ravioli', image: require('../assets/omlet.png'), price: '397 TL',description:"Mozzarella peynirli ve kuru domates dolgulu ravioli, bitkisel krema, kuru domates, rende mozzarella peyniri, muskat, sarımsak ve tereyağı"},
      { id: 6, name: 'Beş Peynirli Pomodori Ravioli', image: require('../assets/omlet.png'), price: '399 TL',description:"İthal ve yerli peynirler ile doldurumuş ravioli, bitkisel krema, ev yapımı pesto sos, ceviz içi, sarımsak, muskat, beyaz karabiber, rende mozzarella peyniri ve tereyağı"},
      
    ]
     },
    { id: 15, name: 'Adana Kebapçısı', image: require('../assets/adanakebapçısı.png') },
    { id: 16, name: 'Çiçek Börek', image: require('../assets/cicekborek.png') },
    { id: 17, name: 'Usta Pideci', image: require('../assets/ustapideci.png') },
    { id: 18, name: 'Özsüt', image: require('../assets/özsüt.png') },
    { id: 19, name: 'Cadının Evi', image: require('../assets/cadı.png') },
    { id: 20, name: 'Burger King', image: require('../assets/burgerking.png') },
    { id: 21, name: 'McDonalds', image: require('../assets/mc.png') },
    { id: 22, name: 'Popeyes', image: require('../assets/popeyes.png') },
    { id: 23, name: 'Bycan Burger House', image: require('../assets/bycan.png') },
    { id: 24, name: 'Burger Buffss', image: require('../assets/buf.png') },
    { id: 25, name: 'Pasaport Pizza', image: require('../assets/pasaport.png') },
    { id: 26, name: 'Sbarro Pizza', image: require('../assets/sbarro.png') },
    { id: 27, name: 'Bursa İskender Kebapçısı', image: require('../assets/bursis.png') },
    { id: 28, name: 'Çırahan Kilo Mangal', image: require('../assets/çırahankilo.png') },
    { id: 29, name: 'Ulaş Et Lokantası', image: require('../assets/ulaşet.png') },
    { id: 30, name: 'Boston Drink Dessert', image: require('../assets/boston.png') },
    { id: 31, name: 'Öz Tescilli Adana Kebapçısı', image: require('../assets/öztescil.png') },
    { id: 32, name: 'Bolulu Hasan Usta', image: require('../assets/bolulu.png') },
    { id: 33, name: 'Dayı Kürek Lahmacun', image: require('../assets/dayıkürek.png') },



  ]);
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant });
  };
  const renderMenu = (menu) => {
    return (
      <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleMenuPress(menu)}>
        <Image source={menu.image} style={styles.menuImage} />
        <View style={styles.menuInfo}>
          <Text style={styles.menuName}>{menu.name}</Text>
          <Text style={styles.menuPrice}>{menu.price}</Text>
          {/* Diğer menü bilgileri */}
        </View>
      </TouchableOpacity>
    );
  };
 

 const offerData = [
    { id: 1, name: 'Özel Fırsat 1', image: require('../assets/fırsat1.jpeg.png') },
    { id: 2, name: 'Özel Fırsat 2', image: require('../assets/fırsat2.jpeg.png') },
    { id: 3, name: 'Özel Fırsat 3', image: require('../assets/fırsat3.jpeg.png') },
    { id: 4, name: 'Özel Fırsat 4', image: require('../assets/fırsat4.jpeg.png') },
    { id: 5, name: 'Özel Fırsat 5', image: require('../assets/fırsat5.jpeg.png') },
    // Diğer özel fırsatlar
  ];


  const cuisines = [
    { id: 1, name: 'Burger', image: require('../assets/burger.jpeg') },
    { id: 2, name: 'Döner', image: require('../assets/döner.jpeg.png') },
    { id: 3, name: 'Pizza', image: require('../assets/pizza.jpg') },
    { id: 4, name: 'Kebap', image: require('../assets/kebap.jpeg') },
    { id: 5, name: 'Tatlı', image: require('../assets/tatlı.png') },
    { id: 6, name: 'PideLahmacun', image: require('../assets/pide.png') },
    { id: 7, name: 'Çiğköfte', image: require('../assets/ckofte.png') },
    { id: 8, name: 'DünyaMutfağı', image: require('../assets/dny.png') },
    { id: 9, name: 'Kahve', image: require('../assets/kahve.png') },
    { id: 10, name: 'KahvaltıveBörek', image: require('../assets/kahvaltı.png') },
    { id: 11, name: 'PastaFırın', image: require('../assets/fırın.png') },
    
    { id: 13, name: 'Sushi ve Uzakdoğu', image: require('../assets/susi.png') },
    { id: 14, name: 'Deniz Ürünleri', image: require('../assets/balık.png') },
    // Diğer mutfak çeşitleri
  ];

  const handleCuisinePress = (cuisine) => {
    navigation.navigate('Cuisine', { cuisine });
    };
    
    return (
    <View style={styles.container}>
    <ScrollView style={styles.contentContainer}>
    <View style={styles.topBar}>
    <View style={styles.logoContainer}>
    <Image source={require('../assets/icons8-noodle-64.png')} style={styles.logoImage} />
    <Text style={styles.logoText}>Afiyet Yolunda</Text>
    </View>
    <View style={styles.iconsContainer}>
    <Ionicons name="heart" size={24} color="white" style={styles.icon} />
    <Ionicons name="person" size={24} color="white" style={styles.icon} />
    </View>
    </View>
    <View style={styles.searchContainer}>
    <TextInput
    style={styles.input}
    placeholder="Restoran Ara..."
    value={searchText}
    onChangeText={(text) => setSearchText(text)}
    />
    </View>
    <View style={styles.cuisinesContainer}>
    <Text style={styles.cuisinesTitle}>MUTFAKLAR</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {cuisines.map((cuisine) => (
    <TouchableOpacity key={cuisine.id} onPress={() => handleCuisinePress(cuisine)} style={styles.cuisineCard}>
    <Image source={cuisine.image} style={styles.cuisineImage} />
    <Text style={styles.cuisineName}>{cuisine.name}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </View>
    <View style={styles.offerContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {offerData.map((offer) => (
    <View key={offer.id} style={styles.offerCard}>
    <Image source={offer.image} style={styles.offerImage} />
    <Text style={styles.offerName}>{offer.name}</Text>
    </View>
    ))}
    </ScrollView>
    </View>
    <View style={styles.restaurantListContainer}>
    <Text style={styles.restaurantListTitle}>Restoranlar</Text>
          <FlatList
            data={restaurantData}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => handleRestaurantPress(item)}
              style={styles.restaurantCard}>
                <Image source={item.image} style={styles.restaurantImage} />
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{item.name}</Text>
                  <View style={styles.additionalInfo}>
                    <Ionicons name="time-outline" size={16} color="gray" style={styles.icon} />
                    <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                    <Ionicons name="star" size={16} color="#FFD700" style={styles.icon} />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
    </ScrollView>
    <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem}>
    <MaterialIcons name="explore" size={24} color="white" />
    <Text style={styles.bottomBarText}>Keşfet</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
    <MaterialIcons name="list-alt" size={24} color="white" />
    <Text style={styles.bottomBarText}>Siparişlerim</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
    <MaterialIcons name="shopping-cart" size={24} color="white" />
    <Text style={styles.bottomBarText}>Sepetim</Text>
    </TouchableOpacity>
    </View>
    </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    },
    contentContainer: {
    flex: 1,
    },
    restaurantListContainer: {
      paddingHorizontal: 10,
    },
    restaurantListTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
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
    restaurantName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 10,
    },
    logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    logoImage: {
    width: 40,
    height: 40,
    },
    logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    },
    iconsContainer: {
    flexDirection: 'row',
    },
    icon: {
    marginLeft: 20,
    },
    searchContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    },
    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
    cuisinesContainer: {
    padding: 10,
    },
    cuisinesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    cuisineCard: {
    marginRight: 10,
    alignItems: 'center',
    },
    cuisineImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    },
    cuisineName: {
    marginTop: 5,
    fontSize: 14,
    },
    offerContainer: {
    padding: 10,
    },
    offerCard: {
    marginRight: 10,
    alignItems: 'center',
    },
    offerImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    },
    offerName: {
    marginTop: 5,
    fontSize: 14,
    },
    restaurantListContainer: {
    paddingHorizontal: 10,
    },
    restaurantListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    restaurantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    },
    restaurantImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    },
    restaurantName: {
    fontSize: 16,
    },
    bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#6200ea',
    },
    bottomBarItem: {
    alignItems: 'center',
    },
    bottomBarText: {
    color: 'white',
    marginTop: 5,
    },
    });
    
    export default HomeScreen;