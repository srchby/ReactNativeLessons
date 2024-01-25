import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Modal,
  TouchableOpacity
}
  from 'react-native';
import Header from './components/Header';
import ListTasks from './components/ListTasks';
import AddTasks from './components/AddTasks';
import uuidv4 from 'uuidv4';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'Task 1',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Task 2',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Task 3',
      completed: true
    },
  ])

  // const deleteTasks = (id) => {
  //   setTasks(tasks.filter(task => task.id!== id))
  // }

  const deleteTasks = (id) => {
    setTasks(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  const [modalVisible, setModalVisible] = useState(false);

  const addTasks = title => {
    if (!title) {
      setModalVisible(true);
    } else {
      setTasks(prevItems => {
        return [{ id: uuidv4(), title: title }, ...prevItems]
      })
    }
  }
  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalText}>
            <Text style={styles.modalWarn}>Please enter text</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalConfirm}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header />
      <AddTasks addTasks={addTasks} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListTasks item={item}
          deleteTasks={deleteTasks}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',

  },
  modalText: {
    backgroundColor: 'white', 
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee'
  },
  modalWarn: {
    color: 'black', fontSize: 25, marginBottom: 10 
  },
  modalConfirm: {
    color: 'black', fontSize: 20, marginVertical: 10
  }
});

export default App