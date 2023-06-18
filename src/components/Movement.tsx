import React from 'react';
import { Text, View } from 'react-native';

const movementColor = {
  noob: '#FFEB3B',
  beginner: '#2196F3',
  intermediate: '#4CAF50',
  advanced: '#F44336',
  expert: '#FFC107',
  master: '#009688',
  grandmaster: '#607D8B',
  challenger: '#9C27B0',
  challenger2: '#FF9800',
  challenger3: '#795548',
  challenger4: '#3F51B5',
  newTwo : '#161d28',
};

const Movement = ({ level, name }: {level: number, name: string}) => {

  const asignColor = () => {
    if (level === 0) {return movementColor.noob;}
    if (level < 5) {return movementColor.beginner;}
    if (level < 10) {return movementColor.intermediate;}
    if (level < 20) {return movementColor.advanced;}
    if (level < 25) {return movementColor.expert;}
    if (level < 30) {return movementColor.master;}
    if (level < 35) {return movementColor.grandmaster;}
    if (level < 40) {return movementColor.challenger;}
    if (level < 50) {return movementColor.challenger2;}
    if (level < 60) {return movementColor.challenger3;}
    if (level < 70) { return movementColor.challenger4; }
    if (level < 100) {return movementColor.challenger;}



  };

  return (
    <View
      style={{backgroundColor: asignColor(), padding: 5, borderRadius: 5}}
    >
      <Text style={ {color: asignColor() === movementColor.noob ? '#212121' : 'white', fontSize: 15}}>{ name}</Text>
    </View>
  );
};

export default Movement;

