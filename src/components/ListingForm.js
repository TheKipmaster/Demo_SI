import React from 'react';
import { View } from 'react-native';

import { CardItem, Input } from '../components/common';
import Select from './Select';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      kind: "Venda",
      price: "",
    };
  }

  onTitleChange(value) {
    this.setState({ title: value });
  }

  onDescriptionChange(value) {
    this.setState({ description: value });
  }

  onKindChange(value) {
    if (value === "Empréstimo") {
      this.setState({ kind: value, price: "" });
    } else {
      this.setState({ kind: value });
    }
  }

  onPriceChange(value) {
    this.setState({ price: value });
  }

  render() {
    return (
      <View>
        <CardItem>
          <Input
            label='Título'
            placeholder='Meu Anúncio'
            onChangeText={this.onTitleChange.bind(this)}
            value={this.state.title}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Descrição'
            placeholder='Detalhes do anúncio'
            onChangeText={this.onDescriptionChange.bind(this)}
            value={this.state.description}
            // multiline
            // numberOfLines={3}
            // style={{ height: 120, alignItems: 'flex-start' }}
          />
        </CardItem>
        <CardItem>
          <Select
            label="Tipo de Anúncio"
            options={[
              "Venda",
              "Aluguel",
              "Empréstimo",
            ]}
            selectedValue={this.state.kind}
            onValueChange={this.onKindChange.bind(this)}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Preço'
            placeholder='R$5,00'
            onChangeText={this.onPriceChange.bind(this)}
            value={this.state.price}
            editable={this.state.kind !== "Empréstimo"}
            keyboardType={'numeric'}
          />
        </CardItem>
      </View>
    );
  }
}

export default ListingForm;