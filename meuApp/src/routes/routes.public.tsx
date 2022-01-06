import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const RoutesPublic: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.savTop} />
      <SafeAreaView style={styles.savBottom}>
        <View style={styles.container}>
          <Text>Usuário autenticado !!!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RoutesPublic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  savBottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
  savTop: {
    flex: 0,
    backgroundColor: '#fff',
  },
});
