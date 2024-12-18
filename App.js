import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TopUpPage from './pages/TopUpPage';
import TransferPage from './pages/TransferPage';
import { AuthProvider, useAuth } from './context/AuthContext';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#19918F' : '#19918F'}
            />
          ),
          tabBarActiveTintColor: '#19918F',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tabs.Screen
        name="TopUp"
        component={TopUpPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              size={24}
              color={focused ? '#19918F' : '#19918F'}
            />
          ),
          tabBarActiveTintColor: '#19918F',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tabs.Screen
        name="Transfer"
        component={TransferPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person-add' : 'person-add-outline'}
              size={24}
              color={focused ? '#19918F' : '#19918F'}
            />
          ),
          tabBarActiveTintColor: '#19918F',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tabs.Navigator>
  );
}

function Routes() {
  const {user} = useAuth();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
