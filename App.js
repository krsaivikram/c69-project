
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Read from './screens/readstory'
import Write from './screens/writestory'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
  return (
  <Appcontainer/>
  );
}
}
const Tabnavigator= createBottomTabNavigator({
read:{screen:Read},
write:{screen:Write}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName=="read"){
        return(
          <Image source={require('./assets/booklogo.jpg')} style={{width:60,height:70}}/>
        )
      }
      else if(routeName=="write"){
        return(
          <Image source={require('./assets/writing.jpg')} style={{width:60,height:70}}/>
        )
      }
    }
  })
}
)

const Appcontainer=createAppContainer(Tabnavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
