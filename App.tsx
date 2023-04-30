import { useState } from 'react';
import { Dimensions, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Button from './src/Button/Button';
import CardBox from './src/Card/CardBox';
import ModalComponent from './src/Modal/Modal';

const WIDTH = Dimensions.get('window').width

type DataStateType = {
  todo: string;
  date: string;
}[]

export default function App() {

  const [open, setOpen] = useState(false)

  const [data, setData] = useState<DataStateType>([])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <ModalComponent setData={setData} data={data} visible={open} onClose={() => setOpen(false)} />
        <Text style={styles.todo}>ToDo</Text>
        <FlatList
          data={data}
          renderItem={(item) => {
            return (
              <CardBox cardTitle={item.item.todo} dateTitle={item.item.date} />
            )
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
        <View style={styles.btnBox}>
          <Button onPress={() => setOpen(true)} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  btnBox: {
    position: "absolute",
    bottom: 40,
    width: WIDTH,
    alignItems: "center",
  },
  todo: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 40
  }
});
