import React from 'react';
import { View, Keyboard, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

import { CardItem, Input, Button, Spinner } from '../components/common';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange(value) {
    this.setState({ email: value });
  }

  onPasswordChange(value) {
    this.setState({ password: value });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.props.loginUser(email, password);
    Keyboard.dismiss();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Entrar
        </Button>
      );
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <CardItem>
          <Input
            label='E-mail'
            placeholder='pessoa@aluno.unb.br'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.state.email}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Password'
            placeholder='123456'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.state.password}
            secureTextEntry
          />
        </CardItem>

        {this.renderError()}

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
};

const mapStateToProps = (state) => {
  const { loading, error, user } = state.auth;

  return { loading, error, user };
}

export default connect(mapStateToProps, { loginUser })(LoginScreen);
