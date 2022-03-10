import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width: 50}} />
        <View style={{width: 100}}>
          <Text style={styles.title}>MEU FILHO</Text>
          <Text style={styles.subtitle}>BOARD</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 50,
            }}>
            <Text style={{color: '#fff', marginHorizontal: 5}}>Sair</Text>

            <Icon name="logout" size={16} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Image source={require('../assets/gambia-g9e6216bc1_1920.jpg')} style={{height: 100, width: 100, borderRadius: 50, marginBottom: 10}}/>
        <Text style={styles.name}>Jean Lucas Cardoso</Text>
        <Text style={styles.info}>Matricula 098371 - 6º Ano - Turma 603</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.pair}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={[styles.button, {borderColor: '#eeee00'}]}>
              <View style={{position: 'absolute', right: 5, top: 5}}>
                <Ionicon name="md-warning-outline" size={15} color="#cc0" />
              </View>
              <Icon name="file-document-outline" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>Boletim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={styles.button}>
              <SimpleIcon name="chart" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>Progresso</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.pair}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={styles.button}>
              <Icon name="calendar-blank-outline" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>
                Calendário
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={styles.button}>
              <Icon name="file-outline" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>
                Documentos
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.pair}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={styles.button}>
              <Icon name="history" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>Histórico</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Tela ainda em desenvolvimento',
                'Tente novamente mais tarde',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }}>
            <View style={styles.button}>
              <View style={{position: 'absolute', right: -5, top: -5, backgroundColor: '#0c0', width: 25, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 50}}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>1</Text>
              </View>
              <Icon name="information-outline" size={30} color="#000" />
              <Text style={{fontWeight: 'bold', color: '#444'}}>Avisos</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2ecc71',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  photo: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  info: {
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 10,
    width: 110,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
    marginTop: 40,
  },
  pair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
