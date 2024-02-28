import { NavigationContainer } from "@react-navigation/native";

// Responsável por criar a navegação em pilha
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import SobreMim from './src/screens/SobreMim';
import Salgados from './src/screens/Salgados';
import Bebidas from './src/screens/Bebidas';
import Doces from './src/screens/Doces';
import Coxinha from './src/screens/Coxinha'
import Enroladinho from './src/screens/Enroladinho'
import Croissant from './src/screens/Croissant'
import Sonho from './src/screens/Sonho'
import MorangoNordeste from './src/screens/MorangoNordeste'
import Brownie from './src/screens/Brownie'

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Salgados" component={Salgados} />
        <Stack.Screen name="Doces" component={Doces} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
        <Stack.Screen name="Coxinha" component={Coxinha} />
        <Stack.Screen name="Enroladinho" component={Enroladinho} />
        <Stack.Screen name="Croissant" component={Croissant} />
        <Stack.Screen name="Sonho" component={Sonho} />
        <Stack.Screen name="MorangoNordeste" component={Enroladinho} />
        <Stack.Screen name="Brownie" component={Brownie} />
       </Stack.Navigator>
       <StatusBar style="auto" />
    </NavigationContainer>
  )
}
