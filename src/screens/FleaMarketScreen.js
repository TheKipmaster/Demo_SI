import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ListingCard from '../components/ListingCard';

const DATA = [
  {
    id: '1',
    title: "Um Anúncio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar sem eu tincidunt maximus. Morbi ultrices, elit at dictum accumsan, mi nisl consequat ipsum, non dapibus massa quam id elit. Cras et condimentum ante.",
    imageSource: require('../../assets/ads.png'),
  },
  {
    id: '2',
    title: "Outro Anúncio",
    description: "Nunc luctus sem nec metus euismod, aliquet bibendum ante finibus. Nulla facilisi. Vivamus ac magna ut tortor mollis vulputate non tristique tellus.",
    imageSource: require('../../assets/ads.png'),
  },
  {
    id: '3',
    title: "Another Anúncio",
    description: "Praesent non ligula sagittis, luctus ligula nec, tempus velit. Praesent consequat eros in ligula pellentesque, at convallis enim tristique. ",
    imageSource: require('../../assets/ads.png'),
  },
  {
    id: '4',
    title: "Mais um Anúncio",
    description: "Mauris sollicitudin leo sapien, ac placerat orci rutrum ac.",
    imageSource: require('../../assets/ads.png'),
  },
  {
    id: '5',
    title: "Olha o Anúncio",
    description: "Sed nulla ipsum, lobortis vel nulla a, varius ultricies justo. Duis ut pretium orci.",
    imageSource: require('../../assets/ads.png'),
  },
  {
    id: '6',
    title: "Outro Anúncio",
    description: "Nunc luctus sem nec metus euismod, aliquet bibendum ante finibus. Nulla facilisi. Vivamus ac magna ut tortor mollis vulputate non tristique tellus.",
    imageSource: require('../../assets/ads.png'),
  },
];

class FleaMarketScreen extends React.Component {
  renderItem({ item }) {
    return (<ListingCard listing={item} navigation={this.props.navigation} />);
  }

  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default FleaMarketScreen;
