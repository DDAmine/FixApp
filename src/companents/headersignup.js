import React, { Component } from 'react';
import {Text,View, StyleSheet} from'react-native';


class Headersignup extends  React.Component {
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
                <Text style={textStyles} > Welcome  !</Text>
                <Text style={sousText} >Please sign up below</Text>
            </View>
        
            )
    }

};



export default Headersignup; 