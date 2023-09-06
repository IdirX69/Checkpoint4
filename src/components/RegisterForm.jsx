import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class RegisterForm extends Component {
  render() {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input,
});
