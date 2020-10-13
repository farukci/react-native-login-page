
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput,
  Image,
  Dimensions
} from 'react-native';

import { Input, Button} from "./components"


const App = () => {

  // const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.body}>
        {/* <ShoppingCart/> */}
        <Image
          style={styles.logo}
          source={require('./images/shopping_cart.png')}
        />

        <Input holder="E-posta giriniz..." />
        <Input holder="Şifre giriniz..." />

        <Button text="Giriş Yap" onPress={() => {}}/>
        <Button text="Kayıt Ol" onPress={() => {}}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#80CBC4", 
    flex:1,
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
  },
  logo: {
    // backgroundColor: "red",
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.35,
  },
});

export default App; 


/* 

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


*/