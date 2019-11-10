import React from 'react';
import { View, Keyboard, Text } from 'react-native';
import * as axios from 'axios';
// import { connect } from 'react-redux';
// import { formUpdate } from '../actions';

import { API_URL } from '../actions/types';
import { CardItem, Input, Button, Spinner } from '../components/common';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: "",
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

    this.setState({ loading: true, error: "" });

    axios.post(`${API_URL}/login`, { user: { email, password } })
      .then((response) => {
        console.log(response)
        this.setState({ loading: false });
        Keyboard.dismiss();
      })
      .catch((error) => {
        console.log(error.response.data);
        this.setState({
          loading: false,
          error: error.response.data,
        });
        Keyboard.dismiss();
      });
  }

  renderButton() {
    if (this.state.loading) {
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
    if (this.state.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
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

// const mapStateToProps = (state) => {
//   const { name, password } = state.loginForm;

//   return { name, password };
// }

// export default connect(mapStateToProps, { formUpdate })(LoginScreen);

export default LoginScreen;