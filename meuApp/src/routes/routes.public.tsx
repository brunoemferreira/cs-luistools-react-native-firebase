import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoutesPublic: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Usuário autenticado !!!</Text>
    </View>
  );
};

export default RoutesPublic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
