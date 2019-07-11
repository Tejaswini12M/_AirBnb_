import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

class Category extends React.Component {
  render(){
    return (
        <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
        <View style={{ flex:2}}>
            {/* in this part image */}
            {/* instead of hardcode using props */}
            <Image source={this.props.imageUri} style={{ flex:1,width:null,height:null,resizeMode:'cover'}}/>
        </View>
        <View style={{flex:1, paddingLeft:10,paddingTop:10}}>
            {/* In this part Text */}
            <Text>{this.props.name}</Text>
        </View>
    </View>
    );
  }
 }

 export default Category;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
