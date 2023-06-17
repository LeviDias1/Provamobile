import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native-web';

const RecuperacaoSenhaScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleRecuperarSenha = () => {
    // Lógica para recuperar a senha do usuário
    console.log('Recuperar senha:', email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Recuperar Senha" onPress={handleRecuperarSenha} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default RecuperacaoSenhaScreen;
