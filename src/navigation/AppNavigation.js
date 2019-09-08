import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home'
import SignupScreen from '../screens/SignupScreen';
import Takepicture from '../screens/Takephoto';

import ProfileScreen from '../screens/ProfileScreen';

const HomeNavigator  = createStackNavigator ({
Home: HomeScreen
});
const ProfileNavigator  = createStackNavigator ({
  Profile: ProfileScreen
});
const TakepictureNavigator  = createStackNavigator ({
  Takepicture: Takepicture
});
  

const MainNavigator = createStackNavigator(
    {
      
      Login: LoginScreen,
      Signup: SignupScreen,
      
      
      

    },
    {
      initialRouteName: 'Login',
      // headerMode: 'float',
      defaulfNavigationOptions: ({ navigation }) => ({
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
          
        },
        headerTintColor: "blue",
      })
    }
  );
  const AppNavigator = createBottomTabNavigator({
    
    
    Home:{  
      screen:HomeNavigator,  
      navigationOptions:{  
        tabBarLabel:'Home',  
        tabBarIcon:({tintColor})=>(  
            <Icon name="ios-home" color={tintColor} size={25}/>  
        )  
      }  
    },
    Takepicture:  {  
      screen:TakepictureNavigator,  
      navigationOptions:{  
        tabBarLabel:'Take picture',  
        tabBarIcon:({tintColor})=>(  
            <Icon name="ios-add-circle-outline" color={tintColor} size={25}/>  
        )  
      }  
    },
    Profile: {  
      screen:ProfileNavigator,  
      navigationOptions:{  
        tabBarLabel:'Profile',  
        tabBarIcon:({tintColor})=>(  
            <Icon name="ios-person" color={tintColor} size={25}/>  
        )  
      }  
    },
    
    

  })
  homeStackNav = createSwitchNavigator({
    Login: MainNavigator,
    Home: AppNavigator
  });

  

  
  export default AppContainer = createAppContainer(homeStackNav);