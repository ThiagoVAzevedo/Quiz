import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [nomeUsuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Novo estado para controlar a exibição da mensagem

  const showAlert = () => {
    alert('Login concluído', 'Seu Login foi concluído com sucesso!');
  };

  const clickHandler = () => {
    alert('Alunos: Thiago Valladão e Júlia Teles');
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
        <Text style = {styles.display1}>Quiz de Rotina e Bem-Estar</Text>
        <Image
          source={require('./imagens/saude.png')} // o caminho da imagem do logotipo da empresa
          style={styles.logo}
        />
        <Text style={styles.label}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
         value={nomeUsuario}
          onChangeText={text => setUsuario(text)}
        />

       <TextInput
         style={styles.input}
         placeholder="Senha"
         value={senha}
         onChangeText={text => setSenha(text)}
       />

       <Button title="Login" onPress={showAlert} />
         <Text
            style={styles.hyperlinkStyle}
            onPress={() => navigation.navigate('Cadastro')}>
            Cadastre-se caso não tenha uma conta
         </Text>

        <StatusBar style="auto" />
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
        source={{
        uri:
        'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
      }}
    style={styles.floatingButtonStyle}
  />
</TouchableOpacity>
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
    fontSize: 30,
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
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});