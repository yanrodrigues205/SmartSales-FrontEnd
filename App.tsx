import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './src/components/Menu';
import { Provider as PaperProvider } from 'react-native-paper';
;
import HomeScreen from './src/screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => (
            <Menu
              userName="Yan Silva"
              userEmail="yan.silva@example.com"
              navigation={props.navigation}
            />
          )}
        >
          <Drawer.Screen name="Smart Sales" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
