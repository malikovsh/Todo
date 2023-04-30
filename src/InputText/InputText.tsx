import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type InputProps = {
    onChangeText: Function
}

const InputText = (props: InputProps) => {
    return (
        <View>
            <TextInput autoFocus onChangeText={(value) => props.onChangeText(value)} style={styles.InputText} placeholder='Todo' />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    InputText: {
        padding: 12,
        fontWeight: '300',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 20
    }
})