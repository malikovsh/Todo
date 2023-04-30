import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

type ButtonProps = {
    onPress: () => void
};

const Button = ({ onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Entypo name="plus" size={36} color="white" />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "orange",
        shadowColor: '#ddd',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5
    },
    plus: {
        fontWeight: '700',
        fontSize: 50,
    }
})