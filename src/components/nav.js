import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Alert, FlatList, StyleSheet, Text, TouchableHighlight,  View, ScrollView,  Image, ImageBackground  } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation';
import Profile from '../screens/ProfileScreen';



  
 class Nav extends Component {
  state = {
    activeTab: 'Home'
  }
    tabs = [
      {
        key: 'Home',
        icon: 'home',
        label: 'Home',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      { key: 'picture',
        icon: 'adjust',
        label: 'upload picture',
        barColor: '#B71C1C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'Profile',
        icon: 'person',
        label: 'Profile',
        barColor: '#E64A19',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        initialRouteName: 'Home',
        order: ['Home', 'picture', 'Profile']
      }
    ]
  
    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon} />
    )
  
    renderTab = ({ tab, isActive }) => (
      <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )

    handleTabPress = (newTab, oldTab) => {
      this.setState({ activeTab: newTab.key })
      
    }
  
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* Your screen contents depending on current tab. */}
          </View>
          <BottomNavigation
            onTabPress={this.handleTabPress} 
          
          

            
            
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
      )
    }
  }
  export default Nav;
  