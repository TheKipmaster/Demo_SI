import React from 'react';
import { View, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { listingCreate } from '../actions';
import { Card, CardItem, Button } from '../components/common';
import ListingForm from '../components/ListingForm';

class NewListingScreen extends React.Component {
  onSubmit() {
    const { listingForm, token } = this.props;

    this.props.listingCreate(listingForm, token);
    Keyboard.dismiss();
  }

  render() {
    return (
      <View>
        <Card>
          <ListingForm {...this.props.listingForm} />
          <CardItem>
            <Button onPress={this.onSubmit.bind(this)}>
              Criar Anúncio
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ listingForm, auth }) => {
  const { token } = auth.user;

  return ({ listingForm, token });
};

export default connect(mapStateToProps, { listingCreate })(NewListingScreen);