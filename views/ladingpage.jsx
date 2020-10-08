import React from 'react'
import { View ,StyleSheet, Text} from 'react-native';
import Button from '../components/button'

 function ladingpage() {
    return (
        <View style={styles.container}>
            <Text styles={styles.text}>semia</Text>
            <Button/>
        </View>
    )
}
export default ladingpage;

const styles = StyleSheet.create({
    container: {
     flex:1,
      backgroundColor: 'red',
      
    },
    // text: {
    //     alignContent:"center",
    //     alignItems:'center',
    //     fontWeight:"bold"
    // }
  });
  
