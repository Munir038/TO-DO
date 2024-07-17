import { Text, SafeAreaView, StyleSheet,ScrollView,View,TextInput,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {useState} from 'react';
// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
const [item,setItem] = useState('');
const [list,setList] = useState([]);
const [duplicate,setDuplicate] = useState('');
  return (
    <SafeAreaView style={{}}>
    <View style = {{alignItems:'center',padding:10,margin:10}}>
      <Text style = {{fontFamily:'cursive',fontSize:20,color:'grey',}}>Items</Text>
    </View>
    <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
    <TextInput 
    placeholder = 'Enter Item'
    placeholderTextColor='grey'
    style = {{borderWidth:1,padding:4,margin:2,borderRadius:4,borderColor:'lightgrey'}}
    onChangeText = {(text)=>{setItem(text)}}
    value = {item}
    />
    <View style={{paddingLeft:2}}>
    <TouchableOpacity style = {{
      paddingHorizontal:10,
      backgroundColor:'#24A0ed',
      borderRadius:4
      }}
      onPress = {()=>{if(item!=''){
        let dupIdx = list.findIndex((dup)=>dup===duplicate)
        let duplicateVal = list.find((val)=>val === item)
        if(dupIdx!=-1){
          let newList = [...list];
          newList[dupIdx] = item;
          setList(newList) 
          setItem('');
          setDuplicate('')
        }
        else{
          if(duplicateVal){
          alert('Duplicate item!');
        }else{
           let newList = [...list,item]
        setList(newList)
        setItem('')
        }
        }
        }}}
    >
    <Text style={{color:'#fff',fontFamily:'monospace',padding:6,marginHorizontal:4,paddingHorizontal:10}}>Add</Text></TouchableOpacity>
    </View>
    </View>
    <View style = {{justifyContent:'center',flex:1,borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:list.length>0&&1,margin:10,borderColor:'lightgrey',borderRadius:4}}>
    {list.map((listVal,listKey)=>(
      <View style = {{flexDirection:'row',justifyContent:'space-between',borderRadius:4,borderTopWidth:1,borderColor:'lightgrey'}}>
      <Text style ={{padding:6,fontFamily:'cursive',fontSize:16}}>{listKey+1}. {listVal}</Text>
      <View style={{flexDirection:'row',justifyContent:'center',padding:6}}>
        <TouchableOpacity style ={{
          backgroundColor:'green',
          justifyContent:'center',
          borderRadius:2,
          marginHorizontal:4
        }}
        onPress = {()=>{
          setItem(listVal)
          setDuplicate(listVal)
        }} 
        >
        <Text style={{paddingHorizontal:6,color:'#fff',fontFamily:'cursive'}}>Edit</Text></TouchableOpacity>
        <TouchableOpacity
        style ={{
          backgroundColor:'red',
          justifyContent:'center',
          borderRadius:2,
          marginHorizontal:4
        }}
        onPress = {()=>{
          let newList = [...list];
          newList.splice(listKey,1);
          setList(newList)
          setItem('');

        }}
        ><Text style={{paddingHorizontal:6,color:'#fff',fontFamily:'cursive'}}>Delete</Text></TouchableOpacity>
        </View>
        
        </View>
      ))}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
