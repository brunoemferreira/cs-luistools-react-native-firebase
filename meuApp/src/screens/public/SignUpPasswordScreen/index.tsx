import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpPasswordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Defina sua Senha</Text>
    </View>
  )
}

export default SignUpPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})