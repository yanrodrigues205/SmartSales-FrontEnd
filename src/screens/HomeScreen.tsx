import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Menu from '../components/Menu';

const HomeScreen: React.FC = () => {
  const handleLogout = () => {
    console.log('Usuário deslogado');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Menu Inicial</Text>
        <View style={styles.gridContainer}>
          {['Clientes', 'Vendas', 'Produtos', 'Usuários'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    aspectRatio: 1, // Mantém o card quadrado
    backgroundColor: '#f2f2f2', // Fundo cinza claro
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Sombra no Android
  },
  cardText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
