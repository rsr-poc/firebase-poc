import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../scenes/Home'

const Stack = createStackNavigator();
export default ()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}