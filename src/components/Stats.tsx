import React from 'react';
import { Text, View } from 'react-native';
import { Stat } from '../interfaces/pokemon';

const colorStats = {
  verylow: '#EA3426',
  low: '#e3DD00',
  medium: '#ff9a00',
  high: '#007700',
  veryHigh: '#0078ff',
  legendary: '#bd00ff',
};


const Stats = ({ stat, index }: { stat: Stat, index: number }) => {
  const getColorStat = () => {
    let color;
    if (stat.base_stat < 50) {
      color = colorStats.verylow;
    } else if (stat.base_stat <= 60) {
      color = colorStats.low;
    } else if (stat.base_stat <= 80) {
      color = colorStats.medium;
    } else if (stat.base_stat <= 100) {
      color = colorStats.high;
    } else if (stat.base_stat < 120) {
      color = colorStats.veryHigh;
    } else {
      color = colorStats.legendary;

    }
    return color;
    }
    ;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} key={index}>
      <Text style={{ color: '#212121', fontSize: 15, marginRight: 5 }}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</Text>
      <View>
        <View style={{ width: stat.base_stat, backgroundColor: getColorStat(), height: 20, borderRadius: 5 }} >
          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 2 }}>{stat.base_stat}</Text>
        </View>
      </View>
    </View>
  );
};

export default Stats;


