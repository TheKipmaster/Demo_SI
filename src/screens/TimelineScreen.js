import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { Card, CardItem, Button } from '../components/common';

class TimelineScreen extends React.Component {
  constructor() {
    super()
    this.data = [
      { time: '08:00', title: 'Event 5', description: 'Event 5 Description' },
      { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
      { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
      { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
      { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
      { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
    ]
  }

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

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          data={this.data}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
          descriptionStyle={{ color: 'gray' }}
          columnFormat={'two-column'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export { TimelineScreen };