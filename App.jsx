import { NavigationContainer } from "@react-navigation/native";

// Responsável por criar a navegação em pilha
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import SobreMim from './src/screens/SobreMim';
import Salgados from './src/screens/Salgados';
import Bebidas from './src/screens/Bebidas';
import Doces from './src/screens/Doces';
import Detalhamento from './src/screens/Detalhamento'

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
        <Stack.Screen name="Detalhamento" component={Detalhamento} />
       </Stack.Navigator>
       <StatusBar style="auto" />
    </NavigationContainer>
  )
}
