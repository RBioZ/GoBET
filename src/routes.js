import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Bilhetes from './pages/Bilhetes';
import Print from './pages/Print';
import Live from './pages/Live';
import Tables from './pages/Tables';

const AuthStack = createStackNavigator();
const MenuStack = createDrawerNavigator();
const AppStack = createBottomTabNavigator();

function MenuNavigation(){
  return(
    <MenuStack.Navigator>
      <MenuStack.Screen name="Home" component={Home} />
    </MenuStack.Navigator>
  )
}

function AppNavigation(){
  return(
    <AppStack.Navigator     
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused
            ? 'home'
            : 'home';
          } else if (route.name === 'Live') {
            iconName = focused
            ? 'rss'
            : 'rss';
          } else if (route.name === 'Bilhetes') {
            iconName = focused
            ? 'tag'
            : 'tag';
          } else if (route.name === 'Tables') {
            iconName = focused
            ? 'copy'
            : 'copy';
          } else if (route.name === 'Print') {
            iconName = focused
            ? 'print'
            : 'print';
          }
          return <Icon name={iconName} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{
      activeTintColor: '#CCC',
      inactiveTintColor: '#FFF',
      inactiveBackgroundColor:'#444',
      activeBackgroundColor:'#333'
      }}>
      <AppStack.Screen name="Home" component={MenuNavigation} />
      <AppStack.Screen name="Live" component={Live} />
      <AppStack.Screen name="Bilhetes" component={Bilhetes} />
      <AppStack.Screen name="Tables" component={Tables} />
      <AppStack.Screen name="Print" component={Print} />
    </AppStack.Navigator>
  )
}


function Main() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{headerShown:false}}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="App" component={AppNavigation} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Main;