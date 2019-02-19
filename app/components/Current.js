import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Current extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        let { location, data } = this.props;
        return (
            <View style={styles.container}>
                <Text>{location.name}</Text>
                <Text>{data.condition.text}</Text>
                <Text>{data.temp_f}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: 300,
        marginTop: 50,
    }
  });