import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Header() {
  return (
    <View style={styles.main}>
          <Text style={styles.text}>
            ToDo List
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
main:{
    paddingTop:20,
    height:100,
    backgroundColor:'silver'
},
text:{
    fontSize:38,
    color:'red',
    textAlign:'center',
    fontWeight:'700'
    
}
});