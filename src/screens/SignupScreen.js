import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TextInput, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import Header from './../companents/headersignup';
import MyTextInput from './../companents/mytextinput'
import PasswordInput from './../companents/passwordinput';
const BLUE = "#428AF8";



export default class Signup extends Component {

    constructor(props) {
      super(props);
  
      this.state = { isLoading: true }
    }
    static navigationOptions = {
      title: 'Sign Up',
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
  
    performTimeConsumingTask = async() => {
      return new Promise((resolve) =>
        setTimeout(
          () => { resolve('result') },
          2000
        )
      );
    }
  
    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask();
  
      if (data !== null) {
        this.setState({ isLoading: false });
      }
    }
    onPressCancel = () => {
      this.props.navigation.navigate('Login');
    };
    onPressCreate = () => {
      this.props.navigation.navigate('Profile');
    };
  
  
   
  
  
    render() {
      
      const {navigate} = this.props.navigation;
      return (
  
        <ScrollView>
          <View style={styles.container}>
            <Header />
          </View>
          <View style={styles.container}>
          <TextInput
                name= "Firstname"
                placeholder= "First name"
                
                selectionColor= {BLUE}
                underlineColorAndroid= {BLUE}
                style={styles.textInput}
            />
            <TextInput
                name= "City"
                placeholder= "City"
                
                selectionColor= {BLUE}
                underlineColorAndroid= {BLUE}
                style={styles.textInput}
            />
          <MyTextInput />
          <PasswordInput />

          
          
  
          
          
          <TouchableNativeFeedback
              onPress={() => this.onPressCreate()}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
              
              onPress={() => this.onPressCancel()}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </View>
          </TouchableNativeFeedback>       
          
        </View>
        </ScrollView>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
    textInput:{
        height: 40,
        width: 260,
        marginBottom: 30,
        paddingLeft: 6
    },
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
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center'
  
    }
  });