/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Login({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const confirm = () => {
    if (user === '098371' && password === '123456'){
      navigation.navigate('Main');
    } else {
      Alert.alert(
        'Usuário ou senha incorreto(a)',
        'Por favor verifique o usuário e senha',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#2ecc71', padding: 10}}>
        <Text style={styles.title}>MEU FILHO</Text>
        <Text style={styles.subtitle}>BOARD</Text>
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>BEM-VINDO</Text>
        <Text style={styles.welcomeSubtitle}>Por favor insira o login e a senha</Text>
      </View>
      <View style={styles.login}>
        <TextInput placeholder="Login" style={styles.inputText} onChangeText={text => setUser(text)} />
        <TextInput placeholder="Senha" style={styles.inputText} onChangeText={text => setPassword(text)}/>
      </View>
      <View style={styles.touchableWrapper}>
        <TouchableOpacity onPress={confirm}>
          <View style={styles.styleButton}>
            <Text style={{color: '#fff'}}> ENTRAR </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: '50%', height: '50%', alignSelf: 'center'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  login: {
    marginTop: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -10,
  },
  welcome: {
    marginTop: 30,
    alignItems: 'center',
  },
  welcomeTitle: {
    color: '#2ecc71',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeSubtitle: {
    fontSize: 14,
  },
  inputText: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    backgroundColor: 'white',
    width: 250,
    alignSelf: 'center',
    marginTop: 10,
  },
  styleButton: {
    backgroundColor: '#2ecc71',
    width: 100,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  touchableWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
