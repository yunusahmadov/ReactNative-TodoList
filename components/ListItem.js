import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default function ListItem({el,deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <View style={styles.text}>
        <Text>{el.title}</Text>
        <Text style={{paddingTop:10}}>{el.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
text:{
padding:10,
textAlign:'center',
borderRadius:10,
backgroundColor:'#fafafa',
borderWidth:1,
marginTop:20,
width:'60%',
marginLeft: '20%',
alignItems:'center',
flex:1,
flexDirection:'column'
},

});