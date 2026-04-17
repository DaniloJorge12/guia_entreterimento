import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import ContatoScreen from './src/screens/ContatoScreen';
import SobreScreen from './src/screens/SobreScreen';
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#110808',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerActiveTintColor: '#ad1e1e',
                        drawerActiveBackgroundColor: '#dbeafe',
                        drawerInactiveTintColor: '#334155',
                        drawerLabelStyle: {
                            fontSize: 16,
                            fontWeight: '500',
                        },
                        drawerStyle: {
                            backgroundColor: '#f8fafc',
                            width: 260,
                        },
                    }}>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Detalhes" component={DetalhesScreen} />
                    <Drawer.Screen name="Contato" component={ContatoScreen} />
                    <Drawer.Screen name="Sobre" component={SobreScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}