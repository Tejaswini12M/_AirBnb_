import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';
import Saved from './screens/Saved';
import Profile from './screens/Profile';


 const TabNavigator = createBottomTabNavigator(
   {
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search" color={tintColor} size={24}/>)
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-cart" color={tintColor} size={24}/>)
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart" color={tintColor} size={24}/>)
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-chatboxes" color={tintColor} size={24}/>)
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person" color={tintColor} size={24}/>)
    }
  }
 },{
   tabBarOptions:{
     activeTintColor:'red',
     inactiveTintColor:'grey',
     style:{
       backgroundColor:'white',
       borderTopWidth:0,
       shadowOffset:{width:5,height:3},
       shadowColor:'black',
       shadowOpacity:0.5,
       elevation:5
     }
   }
 }
 )

 export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
