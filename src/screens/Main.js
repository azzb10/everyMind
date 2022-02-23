/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Main = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>EVERYMIND</Text>
      </View>
      <View style={styles.texts}>
          <Text style={styles.welcome}>Bem Vindo a Everymind, Lucas Sena de 25 anos!</Text>
          <Text style={styles.welcome}>Vamos enviar para o email abc@gmail.com as informações com os próximos passos.</Text>
          <Text style={[styles.welcome, {alignSelf: 'center', marginTop: 50, fontSize: 25,}]}>Obrigado!</Text>
      </View>
    </View>

  );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2ecc71',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    texts: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 400,
        padding: 20,
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        marginBottom: 20,
    },
});
