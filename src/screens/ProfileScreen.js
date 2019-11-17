import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';

// const user = {
//   name: "Felippe Carvalho e Kipman",
//   registration_id: "160026280",
//   ira: "3,62",
//   course: "Computação"
// }

let sampleDataPie = [
  {
    value: 75,
    label: 'Feitos',
    color: '#79E9F7',
  }, {
    value: 25,
    label: 'Restantes',
    color: '#FCC9A2'
  }
]

let sampleDataLine = [
  { x: '2016/1', y: 12 },
  { x: '2016/2', y: 18 },
  { x: '2017/1', y: 20 },
  { x: '2018/2', y: 16 },
  { x: '2019/1', y: 14 }
]

class ProfileScreen extends React.Component {

  render() {
    const { name, registration_id, ira, avatar } = this.props.user;
    return (
      <ScrollView style={styles.container} >
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: avatar.url }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.description}>{name}</Text>
            <Text style={styles.description}>{registration_id}</Text>
            <Text style={styles.description}>{"IRA: " + ira}</Text>
            <Text style={styles.title}>Computação</Text>

            <Text style={styles.subtitle}>Créditos feitos/restantes</Text>
            <PureChart Chart data={sampleDataPie} type='pie' styles={styles.chart} />

            <Text style={styles.subtitle}>Créditos por semestre</Text>
            <PureChart data={sampleDataLine} type='line' styles={styles.chart} />

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Grade Horária</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Conectar com o Matrícula Web</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  chart: {
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    color: "#696969",
    marginBottom: 12,
    marginTop: 12,
    textAlign: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 25,
    color: "#696969",
    fontWeight: "600",
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    color: '#FFF',
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});

const mapStateToProps = ({ auth }) => {
  const { user } = auth;

  return { user };
}

export default connect(mapStateToProps, {})(ProfileScreen);