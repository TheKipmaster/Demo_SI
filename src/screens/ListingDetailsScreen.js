import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import { Card, CardItem, Button } from '../components/common';

const ListingDetailsScreen = ({navigation}) => {
  const item = navigation.getParam('item');
  const {titleStyle, descStyle, avatarStyle, containerStyle, textStyle, imageStyle} = styles;

  return (
    <Card>

      <CardItem>
        <Text style={titleStyle}>{item.title}</Text>
      </CardItem>

      <CardItem>
        <Image source={item.imageSource} style={imageStyle} />
      </CardItem>

      <CardItem>
        <Text style={descStyle}>{item.desc}</Text>
      </CardItem>

      <CardItem>
        <View style={containerStyle}>
          <Image source={require('../../assets/man.png')} style={avatarStyle} />
          <View>
            <Text style={textStyle}>Nome</Text>
            <Text style={textStyle}>Matricula</Text>
          </View>
        </View>
      </CardItem>

      <CardItem>
        <Button>Entrar em Contato</Button>
      </CardItem>

  </Card>
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
