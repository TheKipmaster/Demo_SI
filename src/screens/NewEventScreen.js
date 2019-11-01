import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Button } from '../components/common';
import EventForm from '../components/EventForm';

const NewEventScreen = () => {
  return (
    <View>
      <Card>
        <EventForm />
        <CardItem>
          <Button>Criar Evento</Button>
        </CardItem>
      </Card>
    </View>
  );
}

export { NewEventScreen };