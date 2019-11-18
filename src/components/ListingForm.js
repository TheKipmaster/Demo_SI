import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { listingFormUpdate } from '../actions';

import { CardItem, Input } from '../components/common';
import Select from './Select';

class ListingForm extends React.Component {
  onTitleChange(value) {
    this.props.listingFormUpdate({ prop: 'title', value });
  }

  onDescriptionChange(value) {
    this.props.listingFormUpdate({ prop: 'description', value });
  }

  onKindChange(value) {
    if (value === 2) {
      this.onPriceChange("");
    }
    this.props.listingFormUpdate({ prop: 'kind', value });
  }

  onPriceChange(value) {
    this.props.listingFormUpdate({ prop: 'price', value });
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Título'
            placeholder='Meu Anúncio'
            onChangeText={this.onTitleChange.bind(this)}
            value={this.props.title}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Descrição'
            placeholder='Detalhes do anúncio'
            onChangeText={this.onDescriptionChange.bind(this)}
            value={this.props.description}
            // multiline
            // numberOfLines={3}
            // style={{ height: 120, alignItems: 'flex-start' }}
          />
        </CardItem>
        <CardItem>
          <Select
            label="Tipo de Anúncio"
            options={{
              Venda: "sell",
              Aluguel: "rent",
              Empréstimo: "lend",
            }}
            selectedValue={this.props.kind}
            onValueChange={this.onKindChange.bind(this)}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Preço'
            placeholder='R$5,00'
            onChangeText={this.onPriceChange.bind(this)}
            value={this.props.price}
            editable={this.props.kind !== 2}
            keyboardType={'numeric'}
          />
        </CardItem>
      </View>
    );
  }
}

export default connect(null, { listingFormUpdate })(ListingForm);