import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';

import { CardItem, Input } from '../components/common';
import Select from './Select';

class EventForm extends React.Component {
  onNameChange(value) {
    this.props.formUpdate({ prop: 'name', value })
  }

  onDescriptionChange(value) {
    this.props.formUpdate({ prop: 'description', value })
  }

  onSubjectChange(value) {
    this.props.formUpdate({ prop: 'subject', value })
  }

  onDateChange(value) {
    this.props.formUpdate({ prop: 'date', value })
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Nome'
            placeholder='P1'
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Descrição'
            placeholder='Primeira Prova'
            onChangeText={this.onDescriptionChange.bind(this)}
            value={this.props.description}
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
            selectedValue={this.props.subject}
            onValueChange={this.onSubjectChange.bind(this)}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Data'
            placeholder='DD/MM/YYYY'
            onChangeText={this.onDateChange.bind(this)}
            value={this.props.date}
          />
        </CardItem>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, description, subject, date } = state.eventForm;

  return { name, description, subject, date };
}

export default connect(mapStateToProps, { formUpdate })(EventForm);