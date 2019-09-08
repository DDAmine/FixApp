import React, { Component } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableHighlight,  View, ScrollView,  Image, ImageBackground  } from 'react-native';
import {  Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Nav from '../components/nav';
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 1;
// item size
const RECIPE_ITEM_HEIGHT = 200;
const RECIPE_ITEM_MARGIN = 10;


export default class Home extends Component {

    constructor(props) {
      super(props);
  
     
    }
    static navigationOptions = {
      title: 'Home',
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
    renderObject = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1)' >
          <View style={[styles.container,{ borderRadius: 15}]}>
            <ImageBackground style={styles.photo }  imageStyle={{ borderRadius: 15}} source={require('../images/7978287-Broken-Closet-Door-0.jpg')} >
              
                <Text style={[styles.title,{backgroundColor: 'transparent', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.5)', borderTopRightRadius: 15,borderTopLeftRadius:15,flex: 0.2} ]}>{item.key}</Text>
                <Text style={[styles.sousText,{backgroundColor: 'transparent', backgroundColor: 'rgba(0,0,0,0.5)', borderBottomRightRadius: 15,borderBottomLeftRadius:15, flex: 0.2, position: "absolute", bottom: 0} ]}>{item.Description}</Text>
              
            
            </ImageBackground>
            
          </View>
        </TouchableHighlight>
      );
  
    
  
    
    
  
  
   
  
  
    render() {
      
      const {navigate} = this.props.navigation;
      return (
  
        <View style={{flex:1 }} >
          <View style={{flex:1 , marginBottom: 5}}>
          <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={[  
                    {key: 'broken closet', photo_url: '../images/tv.png', "Description":' tv broken in the school need tv gimme tv pls tv omg tv tv is the best yes yes tv fix it' },{key: 'phone'}, {key: 'street'},{key: 'bus'},  
                    {key: 'train'},{key: 'mosque'},{key: 'public garden'},  
                    {key: 'private school'},{key: 'school'}, {key: 'primary school'},  
                    {key: 'beach'},{key: 'tree'},{key: 'College'},  
                    {key: 'secondary school'},{key: 'zoo'},{key: 'bus Stop'},  
                    {key: 'homless'}, {key: 'Homless kid'},{key: 'train stop'},  
                    {key: 'Underway'},{key: 'Airport'},{key: 'train station'}  
                ]}
                renderItem={this.renderObject}
                
            />
          </View>
            
            
          
        </View>

        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        marginLeft: RECIPE_ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: '#C0C0C0'
        
    },
    buttonText: {
      padding: 20,
      color: 'white'
    },
    sousText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
      alignItems: 'center',
      alignSelf: 'stretch'

    },
    photo: {

        flex: 1,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
        opacity: 1
      },
      category: {
        marginTop: 5,
        marginBottom: 5
      },
      title: {
        flex: 2,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        
      },
      testscroll: {
        height: 0.9,
      }
      
  });