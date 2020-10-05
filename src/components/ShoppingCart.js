import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../images/shopping_cart.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
});
