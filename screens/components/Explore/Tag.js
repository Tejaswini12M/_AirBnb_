import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Tag extends React.Component {
  render(){
    return (
        <View style={{minHeight:20,minWidth:40,padding:5,backgroundColor:'white',borderColor:'#dddddd',borderWidth:1,
        borderRadius:2,marginRight:5}}>
        <Text style={{fontSize:10,fontWeight:'700'}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
 }

 export default Tag;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
