import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Dimensions} from "react-native";

const Button = ({ text}) => {
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#546E7A",
        padding: 20,
        width: Dimensions.get("window").width * 0.50,
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
        
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center",
    }
})