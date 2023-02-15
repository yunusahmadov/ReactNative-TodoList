import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
const [listOfItems,setListOfItems]=useState([
  {title:'Buy Food',text:'Buy food today',key:'1'},
  
])


const addHandler=(text,title)=>{
  if (text !=='' && title!='') {
    setListOfItems((list)=>{
      return [
        {text: text,title:title, key:Date.now()},
        ...list
      ]
    })
  }
}
const deleteHandler=(key)=>{
  setListOfItems((list)=>{
    return list.filter(listOfItems=>listOfItems.key !=key)
  });
}
  console.log(listOfItems)
  return (
    <SafeAreaView style={styles.container}>
          <Header/>
          <Form addHandler={addHandler}/>
          <ScrollView >
            {
              listOfItems.map((data, i)=>{
                return(
                  <ListItem key={i} el={data} deleteHandler={deleteHandler}/>
                )
              })
            }
          {/* <FlatList data={listOfItems} renderItem={({item})=>(
           
          )}/> */}
          </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  test:{
    backgroundColor:'red',

  }
});
