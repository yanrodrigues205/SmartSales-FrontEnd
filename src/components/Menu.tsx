import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, Text, Avatar } from 'react-native-paper';

interface MenuProps {
  userName: string;
  userEmail: string;
  navigation: any;
}

const Menu: React.FC<MenuProps> = ({ userName, userEmail, navigation }) => {
  return (
    <View style={styles.menuContainer}>
      {/* Header do Usuário */}
      <View style={styles.header}>
        <Avatar.Text size={64} label={userName.charAt(0)} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>

      {/* Itens do Drawer */}
      <Drawer.Section style={styles.drawerSection}>
        <Drawer.Item
          label="Clientes"
          icon="account-group"
          onPress={() => navigation.navigate('Clientes')}
        />
        <Drawer.Item
          label="Vendas"
          icon="cash"
          onPress={() => navigation.navigate('Vendas')}
        />
        <Drawer.Item
          label="Produtos"
          icon="package-variant"
          onPress={() => navigation.navigate('Produtos')}
        />
        <Drawer.Item
          label="Usuários"
          icon="account"
          onPress={() => navigation.navigate('Usuários')}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: '#ddd',
  },
  drawerSection: {
    marginTop: 20,
  },
});

export default Menu;
