/* eslint-disable react/react-in-jsx-scope */
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara"
        onChangeText={props.onSearch}
        // value={number}
      />
    </View>
  );
};

export default SearchBar;
