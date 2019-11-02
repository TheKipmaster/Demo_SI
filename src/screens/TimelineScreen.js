import React from 'react';
import { Card, CardItem, Button } from '../components/common';

const TimelineScreen = (props) => {
  return (
    <Card>
      <CardItem>
        <Button onPress={() => props.navigation.navigate('NewEventScreen')}>
          Novo Evento
        </Button>
      </CardItem>
    </Card>
  );
}

export { TimelineScreen };