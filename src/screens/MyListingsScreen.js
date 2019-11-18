import React from 'react';
import { FlatList, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardItem, Button } from '../components/common';
import ListingCard from '../components/ListingCard';
import { listingFetch } from '../actions';

class MyListingsScreen extends React.Component {
  componentWillMount() {
    this.props.listingFetch(this.props.token);
  }

  activeListings(status) {
    const { listings } = this.props;

    const list = listings.filter(listing => listing.active == status);

    return list.map(item => ({
      ...item,
      imageSource: require('../../assets/adsmini.png'),
    }));
  }

  renderItem({ item }) {
    return (<ListingCard listing={item} navigation={this.props.navigation} />);
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Button onPress={() => navigation.navigate("NewListingScreen")}>
              Novo Anúncio
            </Button>
          </CardItem>
        </Card>

        <Text style={styles.titleText}>Em Andamento</Text>
        <FlatList
          data={this.activeListings(true)}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
        />

        <Text style={styles.titleText}>Histórico</Text>
        <FlatList
          data={this.activeListings(false)}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 6,
    paddingTop: 10,
    paddingBottom: 10
  },
});

const mapStateToProps = ({ auth, listings }) => {
  const { token } = auth.user;

  return { token, listings: listings.listings };
}

export default connect(mapStateToProps, { listingFetch })(MyListingsScreen);