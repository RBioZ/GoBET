import React, { Component } from 'react'
import 
{ 
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import splash from '../../../assets/splash.png';

export default class Login extends Component {

  state={
    email:'',
    password:'',
    isAuth:true
  }

  render() {

    if(this.state.isAuth === true){
      this.props.navigation.navigate('App')
    }

    return (
      <ImageBackground source={splash} style={styles.container}>
        <View style={styles.login_container}>
          <Text style={styles.title}>Login</Text>
          <TextInput 
            onChangeText={email => this.setState({email}) } 
            placeholder="Email" 
            style={styles.input} 
            keyboardType={'email-address'}/>
          <TextInput 
            onChangeText={password => this.setState({password})} 
            placeholder="Senha" style={styles.input} 
            secureTextEntry={true}/>
          <TouchableOpacity style={styles.button_link}>
            <Text style={styles.text_link}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.props.navigation.navigate('App')}>
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
    backgroundColor: 'rgba(0,0,0,0.7)',
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
    color:'#FFF',
    marginVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#F0F0F0',
    fontSize:16
  },
  title:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18,
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
  },
  logo:{
    width:80,
    height:80,
    marginBottom:20,
    zIndex:5,
  }
})