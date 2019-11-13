import React from 'react';
import { View, Text, Picker } from 'react-native';

class Select extends React.Component {
  renderPickerItems(options) {
    let items = []

    options.forEach((option, key) => {
      items.push(<Picker.Item label={option} value={option} key={key} />);
    });

    return items;
  }

  render() {
    const { pickerStyle, pickerTextStyle, containerStyle } = styles;
    const { label, options, selectedValue, onValueChange } = this.props;

    return (
      <View style={containerStyle}>
        <Text style={pickerTextStyle}>{label}</Text>
        <Picker
          style={pickerStyle}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {this.renderPickerItems(options)}
        </Picker>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: 'center',
    flex: 1
  },
  pickerStyle: {
    flex: 3,
  },
};

export default Select;