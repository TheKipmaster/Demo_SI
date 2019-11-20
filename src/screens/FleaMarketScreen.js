import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';

import ListingCard from '../components/ListingCard';

import { listingFetchAll } from '../actions';

class FleaMarketScreen extends React.Component {
  componentWillMount() {
    this.props.listingFetchAll(this.props.token);
  }

  renderItem({ item }) {
    return (<ListingCard listing={item} navigation={this.props.navigation} />);
  }

  activeListings() {
    const { listings } = this.props;

    const list = listings.filter(listing => listing.active);

    return list.map(item => ({
      ...item,
      imageSource: require('../../assets/adsmini.png'),
    }));
  }

  render() {
    return (
      <View>
        <NavigationEvents onWillFocus={this.componentWillMount.bind(this)} />
        <FlatList
          data={this.activeListings()}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth, fleaMarket }) => {
  const { token } = auth.user;

  return { token, listings: fleaMarket.listings };
}

export default connect(mapStateToProps, { listingFetchAll })(FleaMarketScreen);
