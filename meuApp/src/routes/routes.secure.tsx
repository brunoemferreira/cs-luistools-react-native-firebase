import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const RoutesSecure: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.savTop} />
      <SafeAreaView style={styles.savBottom}>
        <View style={styles.container}>
          <Text style={{ color: '#fff' }}>Usuário Autenticado !!!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RoutesSecure;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  savBottom: {
    flex: 1,
    backgroundColor: '#21aa06',
  },
  savTop: {
    flex: 0,
    backgroundColor: '#21aa06',
  },
});
