import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({holder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={holder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eceff1",
        margin: 10,
        borderRadius: 10,
    }
})

export { Input }