import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopicScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Tópicos.</Text>
    </View>
  )
}

export default TopicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})