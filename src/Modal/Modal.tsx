import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import InputText from '../InputText/InputText'

type ModalProps = {
    visible: boolean,
    onClose: () => void,
    setData: (data: any) => void,
    data: {
        todo: string,
        date: string,
    }[]
}

const ModalComponent = ({ visible, onClose, setData, data }: ModalProps) => {

    const [text, setText] = React.useState()

    const date = new Date()

    // 17.08.2021 12:00
    const dateFormat = (date: Date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = date.getMinutes()

        return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    }

    const added = () => {
        setData([...data, {
            todo: text,
            date: dateFormat(date)
        }])
        onClose()
    }



    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>Add Todo</Text>
                        <InputText onChangeText={setText} />
                        <View style={styles.btnsBox}>
                            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                                <Text style={styles.btnTitle}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addBtn} onPress={added}>
                                <Text style={styles.btnTitle}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    modal: {
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#777',
        borderRadius: 25
    },
    title: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '200',
        fontSize: 25,
        marginBottom: 15
    },
    btnsBox: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 15,
        justifyContent: "space-around"
    },
    closeBtn: {
        width: 150,
        height: 50,
        backgroundColor: 'purple',
        borderRadius: 20,
        justifyContent: 'center'
    },
    addBtn: {
        width: 150,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 20,
        justifyContent: 'center'
    },
    btnTitle: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: '300',
        fontSize: 25
    }
})