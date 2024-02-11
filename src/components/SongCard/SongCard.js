import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style';

const SongCard = ({item}) => {
  console.log({item});
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: item.imageUrl}} />
      <View style={styles.content}>
        <Text style={styles.item}>{item.title}</Text>
        <Text style={styles.artist}>
          {item.artist}-{item.year}
        </Text>
        <Text style={styles.album}>Album:{item.album}</Text>
        {item.isSoldOut ? '' : <Text style={styles.isSoldOut}>TÜKENDİ</Text>}
      </View>
    </View>
  );
};

export default SongCard;
