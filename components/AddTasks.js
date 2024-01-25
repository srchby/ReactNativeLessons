import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddTasks = ({title, addTasks}) => {
    const [text,setText] = useState('');
    const onChange = textValue => {setText(textValue);}

    return (
    <View>
        <TextInput placeholder='' 
        style={styles.input}
        onChangeText={onChange}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addTasks(text)}>
            <Text style={styles.btnText}><Icon name='note-add' size={20}/>Add Task</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 20,
    marginTop: 20
  },
  btn: {
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
//   input: {
//     height: 60,
//     padding: 8,
//     margin: 5,
//   },
//   btn: {
//     backgroundColor: '#c2bad8',
//     padding: 9,
//     margin: 5,
//   },
//   btnText: {
//     color: 'darkslateblue',
//     fontSize: 20,
//     textAlign: 'center',
//   }
});

export default AddTasks