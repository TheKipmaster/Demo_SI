import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const AdCard = (props) => {
  return <View style={styles.containerStyle}>
    <Image style={styles.imageStyle} source={props.imageSource} />
    <View  style={styles.textStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.descStyle}>{props.desc}</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

    flexDirection: 'row',
  },
  imageStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  textStyle: {
    flex: 1,
    marginLeft: 10,
  },
  titleStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  descStyle: {
    textAlign: 'justify',
  }
});

export { AdCard };
