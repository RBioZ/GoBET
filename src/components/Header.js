import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = (props) => {
  return(
    <View style={styles.container}>
      {props.drawer && 
        <TouchableOpacity onPress={() => props.onClick()} style={styles.button}>
          <Icon name="bars" color="#FFF" size={30} />
        </TouchableOpacity>
      }
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:50,
    backgroundColor:'#C62827',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  title:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18
  },
  button:{
    position:'absolute',
    left:10
  }
})