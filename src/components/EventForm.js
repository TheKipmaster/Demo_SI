import React from 'react';
import { View } from 'react-native';
import { CardItem, Input } from '../components/common';
import Select from './Select';

class EventForm extends React.Component {
  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Nome'
            placeholder='P1'
          />
        </CardItem>
        <CardItem>
          <Input
            label='Descrição'
            placeholder='Primeira Prova'
            // multiline
            // numberOfLines={3}
            // style={{ height: 120, alignItems: 'flex-start' }}
          />
        </CardItem>
        <CardItem>
          <Select
            label="Disciplina"
            options={[
              "Sistemas de Informação",
              "Informática Aplicada à Educação",
              "Projeto e Análise de Algoritmos",
            ]}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Data'
            placeholder='DD/MM/YYYY'
          />
        </CardItem>
      </View>
    );
  }
}

export default EventForm;