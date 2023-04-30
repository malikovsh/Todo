import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type CardProps = {
    cardTitle: string;
    dateTitle: string;
};

const CardBox = (props: CardProps) => {

    return (
        <View onStartShouldSetResponder={() => true} style={styles.container}>
            <Text style={styles.cardTitle}>{props.cardTitle}</Text>
            <Text style={styles.date}>{props.dateTitle}</Text>
        </View>
    )
}

export default CardBox

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        minHeight: 70,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 12,
        marginTop: 20,
        zIndex: 9999
    },
    cardTitle: {
        fontWeight: '400',
        fontSize: 20,
    },
    date: {
        position: 'absolute',
        bottom: 5,
        right: 15,
        opacity: 0.5
    }
})