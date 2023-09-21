
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button, Alert } from 'react-native';

import React, {useState} from 'react';

export default function Cadastro() {

  const [nomeUsuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmasenha] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Novo estado para controlar a exibição da mensagem

  const showAlert = () => {
    window.alert('Cadastro concluído', 'Seu cadastro foi concluído com sucesso!')
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
      <Text style = {styles.display1}>Quiz de Rotina e Bem-Estar</Text>

      <Image
        source={require('./imagens/saude.png')} // o caminho da imagem do logotipo da empresa
        style={styles.logo}
      />

      <Text style={styles.label}>Cadastramento de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={usuario}
        onChangeText={text => setUsuario(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={text => setSenha(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        value={confirmasenha}
        onChangeText={text => setConfirmasenha(text)}
      />

      <Button title="Cadastrar" onPress={showAlert} />

      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC	',
    alignItems: 'center',
    justifyContent: 'center',
  },

  display: {
    margin: 10, // margem superior do texto (entre cada texto e o primeiro texto em relação ao container)
    marginLeft: 20, // margem esquerda do texto
    color: '#6A5ACD',  
  },

  display1: { // segunda linha de texto 
    marginLeft: 20,
    fontWeight: 'bold',

  },

  display2: {
    color: 'black',
    width: 18,
    height: 20,
  },

  logo: {
    width: 180,
    height: 150,
    marginBottom: 20,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },

  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'green', // Cor da mensagem (você pode personalizar)
  },
 
});
