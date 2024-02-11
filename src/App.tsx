/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-shadow */

import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import {useState} from 'react';

const App = () => {
  const [list, setList] = useState(music_data);
  const item = ({item}: any) => <SongCard item={item} />;

  const HandleSearch = (text: any) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={item}
        ListHeaderComponent={<SearchBar onSearch={HandleSearch} />}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fefefe'},
  input: {
    flex: 1,
    backgroundColor: '#ddd',
    height: 40,
    fontSize: 16,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
});
