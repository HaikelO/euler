import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
                <Button title='Login' onPress={this.props.validate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        backgroundColor: '#a9a9a9',
        width: 300,       
    }
});

export default Form;
