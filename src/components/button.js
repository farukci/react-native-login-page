import React from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

const Button = ({ text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#546E7A",
        margin: 5,
        marginLeft: 100,
        marginRight: 100,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center",
    }
})