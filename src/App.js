
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar, 
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Input, Button} from "./components"


const App = () => {

  // const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#80CBC4"}} >
      <KeyboardAvoidingView 
        style={{flex:1}} 
        behavior={Platform.OS == "android" ? null : "padding"} 
      >
        <ScrollView style={{flex:1}} bounces={false} >
          <View style={{flex:1}}>
            <Image
              style={styles.logo}
              source={require('./images/shopping_cart.png')}
            />

            <Input holder="E-posta giriniz..." />
            <Input holder="Şifre giriniz..." />

            <Button text="Giriş Yap" />
            <Button text="Kayıt Ol" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.35,
  },
});

export default App;