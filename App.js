import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Cartão do jogo
const CartaoJogo = ({ imagem, nome, descricao, onPress }) => {
  return (
    <TouchableOpacity style={styles.cartao} onPress={onPress}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.botao}>Propor Troca</Text>
    </TouchableOpacity>
  );
};

// Tela de Detalhes do Item
const DetalhesItemScreen = ({ route }) => {
  const { nome, descricao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nomeItem}>{nome}</Text>
      <Text style={styles.descricaoItem}>{descricao}</Text>
    </View>
  );
};

// Configuração das rotas
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CartoesJogo">
        <Stack.Screen name="CartoesJogo" component={CartoesJogoScreen} />
        <Stack.Screen
          name="DetalhesItem"
          component={DetalhesItemScreen}
          options={({ route }) => ({ title: route.params.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CartoesJogoScreen = ({ navigation }) => {
  const cartoes = [
    {
      id: 1,
      imagem: require('./assets/Espada do Herói.jpg'),
      nome: 'Espada do Herói',
      descricao: 'Aumenta o poder de ataque em 10 pontos.',
    },
    {
      id: 2,
      imagem: require('./assets/Armadura do Guardião.jpg'),
      nome: 'Armadura do Cavaleiro',
      descricao: 'Aumenta a defesa em 20 pontos.',
    },
    {
      id: 3,
      imagem: require('./assets/Poção de Cura.jpg'),
      nome: 'Poção de Cura',
      descricao: 'Recupera 50 pontos de vida.',
    },
  ];

  return (
    <View style={styles.container}>
      {cartoes.map((cartao) => (
        <CartaoJogo
          key={cartao.id}
          imagem={cartao.imagem}
          nome={cartao.nome}
          descricao={cartao.descricao}
          onPress={() =>
            navigation.navigate('DetalhesItem', {
              nome: cartao.nome,
              descricao: cartao.descricao,
            })
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    //
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartao: {
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  botao: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  nomeItem: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  descricaoItem: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default App;
