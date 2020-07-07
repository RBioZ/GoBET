import React, { Component } from 'react'
import {StyleSheet, SafeAreaView } from 'react-native'

import {Header} from '../../components/Header'

export default class index extends Component {
  render() {

    const openDrawer = () => {
      this.props.navigation.openDrawer();
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Home" onClick={openDrawer} drawer/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f0f5'
  }
})