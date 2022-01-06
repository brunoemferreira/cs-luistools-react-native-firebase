import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Formulario de cadastro</Text>
    </View>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})