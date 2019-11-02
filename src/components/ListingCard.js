import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const AdCard = ({ imageSource, title, desc }) => {
  const { containerStyle, imageStyle, textStyle, titleStyle, descStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image style={imageStyle} source={imageSource} />
      <View  style={textStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descStyle}>{desc}</Text>
      </View>
    </View>
  );
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

export default AdCard;
