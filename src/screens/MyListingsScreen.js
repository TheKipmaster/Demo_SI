import React from 'react';
import { FlatList, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, CardItem, Button } from '../components/common';
import AdCard from '../components/ListingCard';

const FINISHED = [
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
  }
]

const IN_PROGRESS = [
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
  }
]

class MyListingsScreen extends React.Component {
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
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Card>
          <CardItem>
            <Button onPress={() => navigation.navigate('NewListingScreen')}>
              Novo Anúncio
            </Button>
          </CardItem>
        </Card>

        <Text style={styles.titleText}>Em Andamento</Text>
        <FlatList
          data={IN_PROGRESS}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
        />

        <Text style={styles.titleText}>Histórico</Text>
        <FlatList
          data={FINISHED}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
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

export { MyListingsScreen };