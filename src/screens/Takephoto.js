/*import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ExampleApp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }
  static navigationOptions = {
    title: 'Camera',
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
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Capture </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default ExampleApp;*/
// hathi methode 2 
/*import React  from 'react';
import { StyleSheet, View } from 'react-native';
import Camera from '../components/Camera';

export default class ExampleApp extends React.Component {

	constructor(props){
		super(props);
		process.nextTick = setImmediate;
	}

	render() {
		return (
			<View style={styles.container}>
				<Camera />
		 	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',	
	}
});*/
// hathi methode 3
import React , {Component}  from 'react';
import { StyleSheet, Image, Button, View, Text, TextInput, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

export default class ExampleApp extends Component {
  static navigationOptions = {
    title: 'Camera',
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
  state ={
    avatarSource: null
  }
  onPressPost = () => {
    this.props.navigation.navigate('Home');
  };
  selectImage = async () =>{
    ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  }


	

	render(style) {
		return (
			
        <View style={styles.container}>
        
        <TextInput
            placeholder= "      Title"
            placeholderTextColor='rgba(255,255,255,0.7)'
            paddingLeft= '10'
            
            style={styles.textInput}
        />
        <View style={styles.textAreaContainer} >
          <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor='rgba(255,255,255,0.7)' 
              numberOfLines={10}
              multiline={true}
            />
        </View>
        
        <View style={styles.picturearea}>
        {
          this.state.avatarSource && <Image source={this.state.avatarSource} style= {{marginBottom: 10,marginTop: 5, width: 200 , height: 200, aspectRatio: 1.5,  resizeMode: 'contain', alignItems: 'center' }} /> 
        }
      </View>  
       <View style= {{marginBottom: 10,marginLeft:5,marginRight: 5,borderRadius: 50,}}>
       <Button title="select image" onPress={this.selectImage}   />
       </View>
       <View style= {{marginBottom: 10,marginLeft:5,marginRight: 5,borderRadius: 50,}}>
      <Button  title="Post" onPress={() => this.onPressPost()}   />
       
       </View>
      
		 	</View>
      
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
    
    
  },
  /*preview: {
    flex: 1,
    
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },*/
  textInput:{
    paddingRight: 15,
    fontWeight: 'bold',
    height: 40,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 6,
    borderColor: '#2196F3',
    borderRadius:50,
    backgroundColor: 'rgba(0,0,0,0.35)',
  borderWidth: 1,
  marginLeft:5,
  marginRight: 5,
  color: 'rgba(255,255,255,0.7)',
  
  
},textAreaContainer: {
  
  borderColor: '#2196F3',
  borderWidth: 1,
  padding: 5,
  marginBottom: 10,
  marginLeft:5,
  marginRight: 5,
  borderRadius: 10,
  backgroundColor: 'rgba(0,0,0,0.35)',
  
},
textArea: {
  height: 100,
  width: 260,
  fontWeight: 'bold',
  color: 'rgba(255,255,255,0.7)'
  
  
  
  
},
picturearea: {
  alignItems: 'center',
  
  

},
choosearea:{
  
  height: 40,
  width: 260,
  marginBottom: 10,
  paddingLeft: 6 ,
  alignItems: 'center',
  }
,
button: {
  marginBottom: 30,
  width: 260,
  alignItems: 'center',
  backgroundColor: '#2196F3',
  borderRadius:50,
}, post:{
  
  alignItems: 'center',
  

},
imagebackground :{
  
  width: width,
  height: height,
  


}

});

