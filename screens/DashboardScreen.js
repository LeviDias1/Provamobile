import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native-web';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Dashboard!</Text>
      <Button title="Sair" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default DashboardScreen;
