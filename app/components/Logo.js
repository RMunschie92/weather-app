import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.logo}>Munsch Weather Studio</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 30
    }
  });