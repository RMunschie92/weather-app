import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import Current from './components/Current';
import Forecast from './components/Forecast';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      key: '7a4b8df164a345058e3212057191802',
      current: '',
      forecast: ''
    }
  }

  async componentDidMount() {
    try {
      const dataUrl = await fetch('https://api.apixu.com/v1/forecast.json?key=7a4b8df164a345058e3212057191802&q=Boston');
      const dataJson = await dataUrl.json();

      this.setState({ 
        isLoading: false,
        current: dataJson.current,
        location: dataJson.location,
        forecast: dataJson.forecast
      });
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.wrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Logo />
          <Current data={this.state.current} location={this.state.location}/>
          <Forecast data={this.state.forecast}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ff8',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 75,
    marginBottom: 25
  }
});
