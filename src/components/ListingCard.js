import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const ListingCard = ({ listing, navigation }) => {
  const { containerStyle, imageStyle, textStyle, titleStyle, descStyle } = styles;
  const { title, description, imageSource } = listing;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => navigation.navigate(
        'ListingDetailsScreen',
        { listing }
      )}
    >
      <Image style={imageStyle} source={imageSource} />
      <View  style={textStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descStyle}>{description}</Text>
      </View>
    </TouchableOpacity>
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
    height: 64,
    width: 64,
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

export default ListingCard;
