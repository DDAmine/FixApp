import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TextInput, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import Header from './../companents/header';
import MyTextInput from './../companents/mytextinput'
import PasswordInput from './../companents/passwordinput';



export default class LoginScreen extends Component {

    constructor(props) {
      super(props);
  
      
    }
    static navigationOptions = {
      title: 'Login',
      headerTintColor: "white",
      tabBarOptions: {
        visible: false,
      },
      headerStyle: {
        backgroundColor: "#2196F3"
      },headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        
      },
    };
  
    
  
      
    
    onPressInscription = () => {
      this.props.navigation.navigate('Signup');
    };
    onPressSkip = () => {
        this.props.navigation.navigate('Home');
      };
      onPressLogin = () => {
        this.props.navigation.navigate('Home');
      };

  
  
   
  
  
    render() {
      
      const {navigate} = this.props.navigation;
      return (
  
        <ScrollView>
          <View style={styles.container}>
            <Header />
          </View>
          <View style={styles.container}>
          <MyTextInput />
          <PasswordInput />
          
  
          
          
          <TouchableNativeFeedback
              onPress={() => this.onPressLogin()}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.sousText} >don't have an account ? <Text style={{color: '#2196F3'}}
                onPress={() => this.onPressInscription()}>
            Sign up
          </Text></Text>
          

          
          <Text style={{color: '#2196F3' , marginTop: 5 , marginBottom: 2}}
                onPress={() => this.onPressSkip()}>
                  
            Skip
          </Text>        
          
        </View>
        </ScrollView>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      borderRadius:50,
    },
    buttonText: {
      padding: 20,
      color: 'white'
    },
    sousText: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center'
  
    }
  });