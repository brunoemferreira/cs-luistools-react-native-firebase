import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContentEditorScreeen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Editor de Conteúdo.</Text>
    </View>
  )
}

export default ContentEditorScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})