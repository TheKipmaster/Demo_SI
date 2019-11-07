import React from 'react';
import { Card, CardItem, Button } from '../components/common';

const MyListingsScreen = ({ navigation }) => {
  return (
    <Card>
      <CardItem>
        <Button onPress={() => navigation.navigate('NewListingScreen')}>
          Botão
        </Button>
      </CardItem>
    </Card>
  );
}

export { MyListingsScreen };