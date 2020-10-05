
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput
} from 'react-native';

import ShoppingCart from './components/ShoppingCart';


const App = () => {
  return (
    <View style={styles.body}>
      <ShoppingCart/>
      <TextInput
        style={styles.form}
        placeholder="E-posta giriniz..."
        defaultValue={""}
      />
      <TextInput
        style={styles.form}
        placeholder="Şifre giriniz..."
        defaultValue={""}
      />


      
      
    </View>
  );

};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "green",
    display: "flex",
    // justifyContent: "space-evenly",
    height: 800,
  },  
  form:{
    margin: 20,
    borderColor: "black",
    height: 40, 
    backgroundColor: "white"
  },

});

export default App;