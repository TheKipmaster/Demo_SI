import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate } from '../actions';

import { CardItem, Input } from '../components/common';
import Select from './Select';

class ListingForm extends React.Component {
  onTitleChange(value) {
    this.props.formUpdate({ prop: 'title', value });
  }

  onDescriptionChange(value) {
    this.props.formUpdate({ prop: 'description', value });
  }

  onKindChange(value) {
    if (value === "Empréstimo") {
      this.onPriceChange("");
    }
    this.props.formUpdate({ prop: 'kind', value });
  }

  onPriceChange(value) {
    this.props.formUpdate({ prop: 'price', value });
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
            options={[
              "Venda",
              "Aluguel",
              "Empréstimo",
            ]}
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
            editable={this.props.kind !== "Empréstimo"}
            keyboardType={'numeric'}
          />
        </CardItem>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, description, kind, price } = state.listingForm;

  return { title, description, kind, price };
}

export default connect(mapStateToProps, { formUpdate })(ListingForm);