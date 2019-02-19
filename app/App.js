import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      key: '7a4b8df164a345058e3212057191802',
      data: ''
    }
  }

  componentDidMount() {
    return fetch(`https://api.apixu.com/v1/current.json?key=7a4b8df164a345058e3212057191802&q=Boston`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson.location
        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View>
          <Text>Munsch Weather Studio</Text>
          <Text>{this.state.data.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
