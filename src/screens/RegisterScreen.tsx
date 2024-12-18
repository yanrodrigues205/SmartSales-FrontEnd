import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name && email && phone && password) {
      console.log('Usuário registrado:', { name, email, phone, password });
      navigation.navigate('Login'); // Navega para tela de login após o registro
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Telefone"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad" // Abre um teclado numérico no celular
        maxLength={15} // Limita o número de caracteres do telefone
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
