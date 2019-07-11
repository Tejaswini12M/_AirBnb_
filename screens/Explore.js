import React from 'react';
import { StyleSheet,
     Text,
      View,
       SafeAreaView,
       TextInput,
       Platform,
       StatusBar,
       ScrollView,
       Image,
    Dimensions,
  Animated } from 'react-native';
    // Dimension to get the width of the scrren
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';
import Tag from './components/Explore/Tag';

const {height,width} = Dimensions.get('window')

class Explore extends React.Component {

componentWillMount(){

    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 40
    if(Platform.OS =='android'){
        this.startHeaderHeight = 100 + StatusBar.currentHeight
        this.endHeaderHeight = 60 + StatusBar.currentHeight
    }
    // to animate the header means decrease header hide while scrolling in y direction
    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange:[0,50],
      outputRange:[this.startHeaderHeight,this.endHeaderHeight],
      extrapolate:'clamp'
    })

    // animate header guest and dates opacity etc

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange:[this.endHeaderHeight,this.startHeaderHeight],
      outputRange:[0,1],
      extrapolate:'clamp'
    })

    //tags animation

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange:[this.endHeaderHeight,this.startHeaderHeight],
      outputRange:[-30,10],
      extrapolate:'clamp'
    })

}

  render(){
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}}>
            <Animated.View style ={{
                    height:this.animatedHeaderHeight,
                    backgroundColor:'white',
                    borderBottomWidth:1,
                    borderBottomColor:'#dddddd',paddingBottom:20}}>
            <View style={{
                flexDirection:'row',
                padding:10,
                backgroundColor:'white',
                marginHorizontal:20,
                shadowOffset:{width:0,height:0},
                shadowColor:'black',
                shadowOpacity:0.2,
                elevation:1,
                marginTop:Platform.OS=='android'? 30:null }}>
            <Icon name="ios-search" size={20} style={{marginTop:5,paddingHorizontal:10}} />
            <TextInput 
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey" 
                style={{flex:1,fontWeight:'700',backgroundColor:'white'}}/>
            </View>
            <Animated.View style={{flexDirection:'row',marginHorizontal:20,position:'relative',top:this.animatedTagTop,
              opacity:this.animatedOpacity}}>
              <Tag name='Guests'/>
              <Tag name='Dates'/>
            </Animated.View>
            </Animated.View>
          {/* to have fasted response time for ScrollView we use scrollEventThrottle */}
          {/* on scroll we use to map the scroll on a particular animated value */}
          <ScrollView scrollEventThrottle={16} onScroll={Animated.event([
            {nativeEvent:{contentOffset:{y:this.scrollY}}}
          ])} >
              <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                  <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                      What can we help you find, Teju?
                  </Text>
                  {/* To have horizontal scrollview */}
                  <View style={{height:130,marginTop:20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* To have custom Component */}
                       <Category imageUri={require('../assets/1.jpg')} name="Home"/>
                       <Category imageUri={require('../assets/2.jpg')} name="Experiences"/>
                       <Category imageUri={require('../assets/3.jpg')} name="Restaurant"/>
                       <Category imageUri={require('../assets/4.jpg')} name="Travel"/>
                    </ScrollView>
                  </View>
                  <View style={{marginTop:40,paddingHorizontal:20}}>
                      <Text style={{fontSize:24,fontWeight:'700'}}>
                          Introducing Airbnb Plus
                      </Text>
                      <Text style={{fontWeight:'100',marginTop:10}}>
                          A new selection of homes verified for quality & comfort
                      </Text>
                      <View style={{width: width-40,height:200,marginTop:20}}> 
                          <Image source={require('../assets/1.jpg')} style={{flex:1,height:null,width:null,resizeMode:'cover',
                        borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}/>
                      </View>
                  </View>
              </View>

              <View style={{marginTop:40}}>
            <Text style={{fontSize:24,fontWeight:'700', paddingHorizontal:20}}>
              Homes around the world
            </Text>
            <View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
              <Home width={width} name='The Cozy Place' type='PRIVATE ROOM - 2 BEDS' price='5000' rating='4'/>
              <Home width={width} name='The Private Place' type='PRIVATE ROOM - 1 BEDS' price='4000' rating='5'/>
              <Home width={width} name='The Spacious Place' type='PRIVATE ROOM - 4 BEDS' price='8000' rating='3'/>
              <Home width={width} name='The Awesome Place' type='PRIVATE ROOM - 5 BEDS' price='10000' rating='5'/>
            </View>
          </View>
          </ScrollView>
         
          </View>
      </SafeAreaView>
    );
  }
 }

// height: null and width:null means it takes the space available

 export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
