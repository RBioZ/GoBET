import React, { Component } from 'react'
import 
{ 
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import splash from '../../assets/splash.png';
import logo from '../../assets/logo.png'

export default class Login extends Component {
  render() {
    return (
      <ImageBackground source={splash} style={styles.container}>
        <Image source={logo} style={{marginBottom:20}} /> 
        <View style={styles.login_container}>
          <Text style={styles.title}>Login</Text>
          <TextInput placeholder="Email" style={styles.input} keyboardType={'email-address'}/>
          <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
          <TouchableOpacity style={styles.button_link}>
            <Text style={styles.text_link}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.button_text}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  login_container:{
    width:'95%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems:'center',
    paddingVertical:10,
    borderRadius:5
  },
  button:{
    width: '95%',
    height: 50,
    backgroundColor: '#C62827',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginTop:10
  },
  input:{
    width:'95%',
    height:50,
    backgroundColor:'#FFF',
    borderRadius:5,
    marginVertical:10,
  },
  title:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18
  },
  button_text:{
    color:'#FFF',
    fontWeight:'bold'
  },
  button_link:{
    
  },
  text_link:{
    color:'#FFF',
    textDecorationLine: 'underline',
    marginVertical:10
  }
})