import React from 'react';
// import MyComponent from './components/MyComponent';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import ShoppingCart from './components/ShoppingCart';


const App = () => {

  const isAdmin = true;
  function myFunction(userName) {
    return <Text>{userName}</Text>

  }

  return (
    <View style={styles.body}>
      <ShoppingCart/>
      <View style={styles.container} marginTop={100} >
        <Text style={styles.text}>
          CLARUSWAY
    </Text>
      </View>
      <View style={styles.container} padding={50} margin={20}>
        <Text style={styles.text}>
          FULLSTACK EKIBI
    </Text>
      </View>
      {/* <MyComponent /> */}
      {/* <Codehackers /> */}
    </View>
  );

};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "green",
    display: "flex",
    justifyContent: "space-evenly",
    height: 800,
  },
  
  
  container: {
    backgroundColor: 'orange',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  hello: {
    margin: 10,
    textAlign: 'center',
    fontSize: 30
  }

});

export default App;