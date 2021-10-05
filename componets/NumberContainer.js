import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function NumberContainer(props) {
    return (
        <View style={styles.contaier} >
            <Text>{props.children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    contaier:{
        borderColor:'purple',
        borderWidth:2,
        borderRadius:2,
        borderColor:'purple',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default NumberContainer;