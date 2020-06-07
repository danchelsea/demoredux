import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import HomeScreen from './src/components/HomeScreens';
import VideoDetails from './src/components/VideoDetails';

import store from './src/components/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{videoId: ''}}
            options={{
              title: 'Trang Chủ',

              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTitleStyle: {
                fontSize: 20,
                color: '#FFFFFF',
              },
            }}></Stack.Screen>
          <Stack.Screen
            name="Video"
            options={{
              title: 'Video Screen',
              headerStyle: {
                backgroundColor: 'tomato',
              },

              headerTitleStyle: {
                fontSize: 20,
                color: '#FFFFFF',
              },
            }}
            component={VideoDetails}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
