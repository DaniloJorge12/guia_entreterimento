import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import SobreScreen from './src/screens/SobreScreen';

const Drawer = createDrawerNavigator();

function MenuPersonalizado(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      
      <View style={styles.fundoHeader}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} 
          style={styles.fotoPerfil} 
        />
        <Text style={styles.textoOla}>Olá!</Text>
        <Text style={styles.textoSub}>O que vamos assistir hoje?</Text>
      </View>

      <View style={styles.containerBotoes}>
        <DrawerItemList {...props} />
      </View>

    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <MenuPersonalizado {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#110808',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveTintColor: '#7e2694',
            drawerActiveBackgroundColor: 'rgba(229, 9, 20, 0.15)', 
            drawerInactiveTintColor: '#ccc',
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
            drawerStyle: {
              backgroundColor: '#1a1a1a',
              width: 280,
            },
          }}>
          
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Início' }}
          />
          
          <Drawer.Screen 
            name="Detalhes" 
            component={DetalhesScreen} 
            options={{ 
              drawerItemStyle: { display: 'none' } 
            }} 
          />
          
          <Drawer.Screen 
            name="Sobre" 
            component={SobreScreen} 
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  fundoHeader: {
    padding: 20,
    paddingTop: 50, 
    borderBottomRightRadius: 30,
    marginBottom: 15,
  },
  fotoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  textoOla: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textoSub: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 2,
  },
  containerBotoes: {
    paddingHorizontal: 10,
  }
});