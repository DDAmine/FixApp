import React, { Component } from 'react';
import {Text,View, StyleSheet} from'react-native';


class Header extends  React.Component {
    render(){
        const textStyles = {
            color: 'black',
            fontSize: 40,
            fontWeight: 'bold',
            alignItems: 'center'
          };
        const sousText = {
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            alignItems: 'center'
        
          };
        return ( 
            <View>
                <Text style={textStyles} > Welcome Back !</Text>
                <Text style={sousText} >Sign in to continue </Text>
            </View>
        
            )
    }

};



export default Header; 