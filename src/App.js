
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar, TextInput
} from 'react-native';

import ShoppingCart from './components/ShoppingCart';
import FlatButton from "./components/button";


const App = () => {

  // const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.body}>
      <ShoppingCart/>
      <TextInput
        style={styles.form}
        placeholder="E-posta giriniz..."
        defaultValue={""}
        // onChangeText={text => onChangeText(text)}
        // value={value}
      />
      <TextInput
        secureTextEntry
        style={styles.form}
        placeholder="Şifre giriniz..."
        defaultValue={""}
        autoCorrect={false}
      />
      <FlatButton text="Giriş Yap" onPress={() => {}}/>
      <FlatButton text="Kayıt Ol" onPress={() => {}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#80CBC4", 
    display: "flex",
    // justifyContent: "space-evenly",
    height: 800,
  },  
  form: {
    margin: 20,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: 50, 
    backgroundColor: "white",
    fontFamily: "none",
  },
  buttons: {
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 10,
    backgroundColor: "#546E7A",
  }
});

export default App; 