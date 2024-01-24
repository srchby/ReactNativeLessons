import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {
  
    return (
    <View style={styles.header}>
        <Text style={styles.text}> Tasks </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80, 
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80 / 4,
  },
  text: {
    fontSize: 25,
    fontWeight: '300',
    color: "#fff",
    textAlign: 'center',
    paddingTop: 10,
  }
});

export default Header