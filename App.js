import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListTasks from './components/ListTasks';

const App = () => {
  
  const [tasks,setTasks] = useState ([
    {
      id: 1,
      title: 'Task 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      completed: false
    },
    {
      id: 3,
      title: 'Task 3',
      completed: true
    },
  ])

  // const deleteTasks = (id) => {
  //   setTasks(tasks.filter(task => task.id!== id))
  // }

  const deleteTasks = (id) => {
    setTasks(prevItems => {
      return prevItems.filter(item => item.id!== id)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
      data={tasks} 
      renderItem={({item}) => <ListTasks item={item}
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
  text: {
    padding: 20,
  }
});

export default App