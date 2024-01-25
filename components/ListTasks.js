import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListTasks = ({ item, deleteTasks }) => {

    return (
        <TouchableOpacity
            style={styles.listTasks}
            delayPressIn={1}
            delayPressOut={1}
        >
            <View
                style={styles.listTasksView}
            >
                <Text
                    style={styles.listTasksText}
                >
                    {item.title}
                </Text>
                <Icon
                    name="close"
                    style={styles.listTasksIcon}
                    size={25}
                    color="black"
                    onPress={() => deleteTasks(item.id)}
                >
                </Icon>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listTasksView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    listTasksText: {
        fontSize: 20,
        padding: 20,
    },
    listTasks: {
        backgroundColor: '#eee',
        borderColor: '#f8f8f8',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    listTasksIcon: {
        padding: 15,
    }
})

export default ListTasks