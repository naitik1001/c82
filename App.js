//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from '@react-navigation/stack';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createStackNavigation } from '@react-navigation/stack';
//import { createStack } from '@react-navigation/stack';
import DrawerNavigator from './navigator/DrawerNavigation';
//import PostScreen from "./screens/CreatePost";



//const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

