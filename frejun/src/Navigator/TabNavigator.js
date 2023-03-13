import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../Screen/MainScreen';
import SecondScreen from '../Screen/SecondScreen';
import ThirdScreen from '../Screen/ThirdScreen';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    const getTabBarIcon=(iconName)=>({color,size})=>{
      return <Ionicons name={iconName} color={color} size={size} />
    }

  return (
    <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'chatbox' : 'chatbox-outline';
              }else if (route.name === 'Profile') {
                iconName = focused ? 'happy' : 'happy-outline';
              }
    
              return getTabBarIcon(iconName)({ color, size });
            },
          })}
        >
         <Tab.Screen  name='MainScreen' component={MainScreen}   options={{headerShown:false}} />
         <Tab.Screen  name='SecondScreen' component={SecondScreen} options={{headerShown:false}}  />
         <Tab.Screen  name='ThirdScreen' component={ThirdScreen}   options={{headerShown:false}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator;