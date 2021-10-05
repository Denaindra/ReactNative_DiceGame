import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

function UserTextInput(props) {
    return (
        <TextInput  {...props} style={{...styles.input,...props.style}}  />
    );
}

export default UserTextInput;

const styles = StyleSheet.create({
    input:{
        borderColor:'gray',
        borderWidth:0.5,
        width:160,
    
    }
})




