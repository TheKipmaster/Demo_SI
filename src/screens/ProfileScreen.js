import React from 'react';
import { Card, CardItem, Button } from '../components/common';

const ProfileScreen = ({ navigation }) => {
  return (
    <Card>
      <CardItem>
        <Button onPress={() => navigation.navigate('LoginScreen')}>
          Entrar
        </Button>
      </CardItem>
    </Card>
  );
}

export { ProfileScreen };