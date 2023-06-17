import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native-web';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = () => {
    // Lógica para realizar o login do usuário
    console.log('Usuário logado:', email, senha);
    navigation.navigate('Dashboard');
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
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Esqueci minha senha"
        onPress={() => navigation.navigate('RecuperacaoSenha')}
      />
      <Button
        title="Criar conta"
        onPress={() => navigation.navigate('Cadastro')}
      />
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

export default LoginScreen;
