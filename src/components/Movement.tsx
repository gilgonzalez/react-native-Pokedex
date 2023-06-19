import React from 'react';
import { Text, View } from 'react-native';



const Movement = ({  name, color }: { name: string, color: string}) => {


  return (
    <View style={{borderRadius:10,  borderColor:'#212121',padding:5, backgroundColor: color }}>
      <Text style={ {color: '#212121', fontSize:14}}>{ name}</Text>
    </View>
  );
};

export default Movement;

