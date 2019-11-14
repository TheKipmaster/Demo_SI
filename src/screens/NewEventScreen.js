import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Button } from '../components/common';
import EventForm from '../components/EventForm';

import { eventCreate } from '../actions';

class NewEventScreen extends React.Component {
  onSubmit() {
    const { eventForm, token } = this.props;

    this.props.eventCreate(eventForm, token);
  }

  render() {
    return (
      <View>
        <Card>
          <EventForm />
          <CardItem>
            <Button onPress={this.onSubmit.bind(this)}>Criar Evento</Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { token } = state.auth.user;
  const { eventForm } = state;

  return { token, eventForm };
}

export default connect(mapStateToProps, { eventCreate })(NewEventScreen);