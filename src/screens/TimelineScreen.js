import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Timeline from 'react-native-timeline-listview';

import { eventFetch } from '../actions';

class TimelineScreen extends React.Component {
  // onRefresh(){
  //   //set initial data
  // }

  // onEndReached() {
  //   //fetch next data
  // }

  // renderFooter() {
  //   //show loading indicator
  //   if (this.state.waiting) {
  //     return <ActivityIndicator />;
  //   } else {
  //     return <Text>~</Text>;
  //   }
  // }

  componentWillMount() {
    this.props.eventFetch(this.props.token);
  }

  formatData() {
    data = [];

    this.props.events.forEach(event => {
      let time = event.date;
      const { description, title } = event;

      if (event.subjects.length > 0) {
        time += ` - ${event.subjects[0].time}`
      }

      data.push({ time, title, description });
    });

    return data;
  }

  render() {
    const { containerStyle, timeStyle, } = styles;

    return (
      <View style={containerStyle}>
        <Timeline
          data={this.formatData()}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{ minWidth: 52 }}
          timeStyle={timeStyle}
          descriptionStyle={{ color: 'gray' }}
          columnFormat={'two-column'}
          options={{ paddingTop: 5 }}
          showtime={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: 'white',
    padding: 5,
    borderRadius: 13,
  },
  containerStyle: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
    backgroundColor: 'white',
  },
});

const mapStateToProps = ({ auth, events }) => {
  const { token } = auth.user;

  return { token, events: events.events };
};

export default connect(mapStateToProps, { eventFetch })(TimelineScreen);