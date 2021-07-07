import React from 'react'
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function App(){
  return(
    
    <View style={style.container}>
      <StatusBar backgroundColor="#000" translucent={false}/>
    <Image
    source={require('./src/assets/logo.png')}
    style={style.logo}
    />

    <TextInput
      placeholder="Celular, username ou email"
      style={style.input}
    />
    <TextInput
      placeholder="Senha"
      style={style.input}
    />

    <View style={style.containerEsqueceu}>
      <TouchableOpacity>
        <Text style={style.Textsenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>


    <TouchableOpacity style={style.Buttonlogin}>
        <Text style={style.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.containerFacebook}>
      <Icon name="facebook-square" size={25} color="#399fff" />
        <Text style={style.facebookText}>Continue como Allisson</Text>
      </TouchableOpacity>

    <View style={style.Containerlinhas}>
      <View style={style.linha}></View>
      <Text>OU</Text>
      <View style={style.linha}></View>
    </View>

    <View style={style.Containercadastre}>
      <Text style={style.TextCadastre}>Não possui uma conta?</Text>
      <TouchableOpacity>
        <Text style={style.Cadastre}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
}
const style = StyleSheet.create({

  container:{
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1
  },
  logo:{
    marginTop: '13%',
    marginBottom: '13%'
  }, 
  input:{
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f4',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  containerEsqueceu:{
    width: '90%',
    alignItems: 'flex-end'
    
  },
  Textsenha:{
    color: '#399fff'
  },
  Buttonlogin:{
    marginTop: '8%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  loginText:{
    color: '#fff',
    fontSize: 18
  },
  containerFacebook:{
    flexDirection: 'row',
    marginTop: '18%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  facebookText:{
    color: '#399fff',
    marginLeft: 10
  },
  Containerlinhas:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%'
  },
  linha:{
    backgroundColor: '#ccc',
    width: '39%',
    height: 2,
    marginHorizontal: 12
  },
  Containercadastre:{
    flexDirection: 'row',
    marginTop: '16%'
  },
  TextCadastre:{
    color: '#a0a0a0',
    marginRight: 5
  },
  Cadastre: {
    color: '#399fff',
    fontWeight: 'bold'

  }

})