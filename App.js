import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/home";
import cartScreen from "./screens/cart";
import trendScreen from "./screens/tren";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="cart" component={cartScreen} />
        <Stack.Screen name="trend" component={trendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;