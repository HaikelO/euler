import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

import Form from './../components/Form';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: '',
    };    
  }
  onValidate(){
    this.props.navigation.navigate('Home');    
  }
  render() {
    return (
      <View style={styles.container}>
        <Form validate={()=>this.onValidate()}>
            <TextInput placeholder='Username or email' value={this.state.login} />
            <TextInput placeholder='Password' value={this.state.password} />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    }
});

export default LoginScreen;
