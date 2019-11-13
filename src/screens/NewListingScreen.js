import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Button } from '../components/common';
import ListingForm from '../components/ListingForm';

const NewListingScreen = () => {
  return (
    <View>
      <Card>
        <ListingForm />
        <CardItem>
          <Button>Criar Anúncio</Button>
        </CardItem>
      </Card>
    </View>
  );
}

export { NewListingScreen };