import React from 'react';
import { View, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Button } from '../components/common';
import EventForm from '../components/EventForm';

import { eventCreate } from '../actions';

class NewEventScreen extends React.Component {
  onSubmit() {
    const { eventForm, token } = this.props;

    this.props.eventCreate(eventForm, token);
    Keyboard.dismiss();
  }

  render() {
    return (
      <View>
        <Card>
          <EventForm {...this.props.eventForm} />
          <CardItem>
            <Button onPress={this.onSubmit.bind(this)}>Criar Evento</Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ eventForm, auth }) => {
  return { token: auth.user.token, eventForm };
}

export default connect(mapStateToProps, { eventCreate })(NewEventScreen);