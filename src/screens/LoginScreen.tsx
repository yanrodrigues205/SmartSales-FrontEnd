import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};
export default function LoginScreen({ navigation } : Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('TwoFactor');
    }
  };

  return (
    <>
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff' },
});
