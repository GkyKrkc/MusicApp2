import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 5,
  },
  img: {width: 100, height: 100, borderRadius: 50},
  content: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  item: {fontWeight: 'bold', fontSize: 16, textAlign: 'center', padding: 3},
  artist: {fontSize: 13, padding: 3},
  album: {fontSize: 13, padding: 3, fontStyle: 'italic', fontWeight: 'bold'},
  isSoldOut: {
    fontSize: 12,
    color: 'red',
    padding: 3,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    right: 5,
    borderRadius: 5,
  },
});

export default styles;
