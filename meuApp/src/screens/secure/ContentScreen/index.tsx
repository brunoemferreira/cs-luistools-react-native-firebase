import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContentScreeen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Conteúdo.</Text>
    </View>
  )
}

export default ContentScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})