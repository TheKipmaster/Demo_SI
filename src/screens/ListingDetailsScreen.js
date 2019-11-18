import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Button } from '../components/common';

const ListingDetailsScreen = ({ navigation }) => {
  const listing = navigation.getParam('listing');
  const { titleStyle, descStyle, avatarStyle, containerStyle, textStyle, imageStyle } = styles;

  return (
    <ScrollView>
      <Card>

        <CardItem>
          <Text style={titleStyle}>{listing.title}</Text>
        </CardItem>

        <CardItem>
          <Image source={listing.imageSource} style={imageStyle} />
        </CardItem>

        <CardItem>
          <Text style={descStyle}>{listing.description}</Text>
        </CardItem>

        <CardItem>
          <View style={containerStyle}>
            <Image source={{ uri: listing.avatar }} style={avatarStyle} />
            <View>
              <Text style={textStyle}>{listing.name}</Text>
              <Text style={textStyle}>{listing.registration_id}</Text>
            </View>
          </View>
        </CardItem>

        <CardItem>
          <Button>Entrar em Contato</Button>
        </CardItem>

      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,

    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

    flexDirection: 'row',
  },
  imageStyle: {
    flex: 1,
    height: 230,
    resizeMode: 'contain'
  },
  avatarStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
  },
  descStyle: {
    textAlign: 'justify',
    padding: 10,
  }
});

export { ListingDetailsScreen };
