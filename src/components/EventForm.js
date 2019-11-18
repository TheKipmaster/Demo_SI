import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { eventFormUpdate } from '../actions';

import { CardItem, Input } from '../components/common';
import Select from './Select';

class EventForm extends React.Component {
  onTitleChange(value) {
    this.props.eventFormUpdate({ prop: 'title', value })
  }

  onDescriptionChange(value) {
    this.props.eventFormUpdate({ prop: 'description', value })
  }

  onSubjectChange(value) {
    this.props.eventFormUpdate({ prop: 'subject_ids', value })
  }

  onDateChange(value) {
    this.props.eventFormUpdate({ prop: 'date', value })
  }

  onLocalChange(value) {
    this.props.eventFormUpdate({ prop: 'local', value })
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Nome'
            placeholder='P1'
            onChangeText={this.onTitleChange.bind(this)}
            value={this.props.title}
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
            options={{
              "Sistemas de Informação": 0,
              "Informática Aplicada à Educação": 1,
              "Projeto e Análise de Algoritmos": 2,
            }}
            selectedValue={this.props.subject_ids}
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
        <CardItem>
          <Input
            label='Local'
            placeholder='ICC ANF 12'
            onChangeText={this.onLocalChange.bind(this)}
            value={this.props.local}
          />
        </CardItem>
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { title, description, subject_ids, date, local } = state.eventForm;

//   return { title, description, subject_ids, date, local };
// }

export default connect(null, { eventFormUpdate })(EventForm);