
import React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';

export default class Write extends React.Component{
  constructor(){
    super();
    this.state={
      storywritten:"",
      storyname:"",
      author:"",
     
    }
  }  
  render(){
     
  return (
    <KeyboardAvoidingView style={styles.container}  behaviour = "padding" enabled>
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      
    <Text> Write a story </Text>
    </View>


           <View style={styles.inputview}>
            <TextInput style={styles.inputbox} placeholder="Name of the story" onChangeText={text=>this.setState({
            storyname:text
          })}
          value = {this.state.storyname}/>
          </View>
          <View style={styles.inputview}>
           <TextInput style={styles.inputbox} placeholder="Author" onChangeText={text=>this.setState({
            author:text
          })}
          value = {this.state.author}/>
          </View>
          <View style={styles.inputview}>
          <TextInput style={styles.inputbox2} placeholder="Once upon a time........." onChangeText={text=>this.setState({
            storywritten:text
          })}
          value = {this.state.storywritten}/>
          
           </View>
<View>
  <TouchableOpacity style={styles.submitbutton}><Text style={styles.displayText}>submit</Text></TouchableOpacity>
</View>
  
  </KeyboardAvoidingView>
  );}
}

const styles = StyleSheet.create({ 
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  inputbox:{width:205,height:50,fontSize:18,margin:20},
  inputbox2:{width:800,height:430,fontSize:18,margin:20},
  submitbutton:{backgroundColor:"green",width:70,height:40,justifyContent: 'center',borderRadius:10},
  displayText:{ fontSize: 15, textDecorationLine: 'underline',justifyContent: 'center',marginLeft:10 }, 
});