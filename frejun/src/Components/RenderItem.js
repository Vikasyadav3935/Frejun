import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const RenderItem = ({item}) => {
  return (
    <View style={styles.view}>
      <Text style={{paddingHorizontal: 5, fontWeight: '700'}}>{item.id}.</Text>
      <View style={{width: '90%'}}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  view: {
    width: '95%',
    height: windowHeight / 13.8,
    backgroundColor: 'white',
    elevation: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
});
