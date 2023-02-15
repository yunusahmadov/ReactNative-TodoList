import React, { useState } from 'react';
import { StyleSheet, Text,TextInput,Button, View, Pressable  } from 'react-native';
export default function Form({addHandler}) {

    const [text,setValue] =useState('')
    const [title,setTitle] =useState('')



    const onChange=(text)=>{
        setValue(text)
        console.log(text);
    }
    const onChangeTitle=(title)=>{
        setTitle(title)
        console.log(title);
    }
  return (
    <View style={styles.main} >
        <TextInput maxLength={15} style={styles.input} value={title} onChangeText={onChangeTitle} placeholder='Add Title'/>
        <TextInput maxLength={15} style={styles.input} value={text} onChangeText={onChange} placeholder='Add task...'/>
        <Pressable onPress={()=> {
            addHandler(text,title);   ``
            setValue('')
            setTitle('')
        }
            } style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderBottomWidth:1,
        padding:10,
        marginVertical:10,
        marginHorizontal:'20%',
        width:'60%'
    },
    button:{
        // backgroundColor:'red',
        borderRadius:10,
        borderWidth:1,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color:'green',
        textAlign:'center'

    }

});