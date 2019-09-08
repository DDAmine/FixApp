import React from 'react';
import {StyleSheet , TextInput} from'react-native';
const BLUE = "#428AF8";
const LIGHT_GRAY = "D3D3D3";

class MyTextInput extends  React.Component {
    
    render () {
        return (
            <TextInput
                placeholder= "Email"
                selectionColor= {BLUE}
                underlineColorAndroid= {BLUE}
                style={styles.textInput}
            />
            

        );
    }
}
const styles = StyleSheet.create({
    textInput:{
        height: 40,
        width: 260,
        marginBottom: 30,
        paddingLeft: 6
    }
});
export default MyTextInput;