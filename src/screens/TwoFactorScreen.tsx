import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};
export default function TwoFactorScreen({ navigation } : Props) {
  const [code, setCode] = useState(Array(6).fill(''));

  const handleCodeChange = (index : number, value : string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = () => {
    if (code.join('').length === 6) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autenticação de Dois Fatores</Text>
      <View style={styles.codeContainer}>
        {code.map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handleCodeChange(index, value)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  codeContainer: { flexDirection: 'row' },
  input: { width: 40, height: 40, borderWidth: 1, margin: 5, textAlign: 'center' },
  button: { marginTop: 20, backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
