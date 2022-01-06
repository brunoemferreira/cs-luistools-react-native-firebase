import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreeen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Olá, voce está autenticado.</Text>
      <Button onPress={() => { }} title='Visualizar Tópicos' />
    </View>
  )
}

export default HomeScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})