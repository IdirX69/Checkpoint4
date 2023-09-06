import React from 'react';
import {View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
<View>

  <Text>Login</Text>
  <LoginForm/>
</View>
  );
};



export default Login;