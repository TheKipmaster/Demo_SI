import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import AdCard from '../components/ListingCard';

const DATA = [
  {
    id: '1',
    title: "Um Anúncio",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar sem eu tincidunt maximus. Morbi ultrices, elit at dictum accumsan, mi nisl consequat ipsum, non dapibus massa quam id elit. Cras et condimentum ante.",
    imageSource: require('../../assets/adsmini.png'),
  },
  {
    id: '2',
    title: "Outro Anúncio",
    desc: "Nunc luctus sem nec metus euismod, aliquet bibendum ante finibus. Nulla facilisi. Vivamus ac magna ut tortor mollis vulputate non tristique tellus.",
    imageSource: require('../../assets/adsmini.png'),
  },
  {
    id: '3',
    title: "Another Anúncio",
    desc: "Praesent non ligula sagittis, luctus ligula nec, tempus velit. Praesent consequat eros in ligula pellentesque, at convallis enim tristique. ",
    imageSource: require('../../assets/adsmini.png'),
  },
  {
    id: '4',
    title: "Mais um Anúncio",
    desc: "Mauris sollicitudin leo sapien, ac placerat orci rutrum ac.",
    imageSource: require('../../assets/adsmini.png'),
  },
  {
    id: '5',
    title: "Olha o Anúncio",
    desc: "Sed nulla ipsum, lobortis vel nulla a, varius ultricies justo. Duis ut pretium orci.",
    imageSource: require('../../assets/adsmini.png'),
  },
  {
    id: '6',
    title: "Outro Anúncio",
    desc: "Nunc luctus sem nec metus euismod, aliquet bibendum ante finibus. Nulla facilisi. Vivamus ac magna ut tortor mollis vulputate non tristique tellus.",
    imageSource: require('../../assets/adsmini.png'),
  },
];

class FleaMarketScreen extends React.Component {
  renderItem({ item }) {
    const { navigation } = this.props;
    const { title, desc, imageSource } = item;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <AdCard
          title={title}
          desc={desc}
          imageSource={imageSource}
        />
      </TouchableOpacity>
    );
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
