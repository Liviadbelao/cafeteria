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
import BaunilhaLate from './src/screens/BaunilhaLate'
import Frozen from './src/screens/Frozen'
import Expresso from './src/screens/Expresso'
import Header from "./src/components/Header/Header";

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator screenOptions={{
         header: ()=> <Header/>,

       }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="Salgados" component={Salgados}  />
        <Stack.Screen name="Doces" component={Doces} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
        <Stack.Screen name="Coxinha" component={Coxinha}  />
        <Stack.Screen name="Enroladinho" component={Enroladinho} />
        <Stack.Screen name="Croissant" component={Croissant}  />
        <Stack.Screen name="Sonho" component={Sonho} />
        <Stack.Screen name="MorangoNordeste" component={MorangoNordeste} />
        <Stack.Screen name="Brownie" component={Brownie} />
        <Stack.Screen name="BaunilhaLate" component={BaunilhaLate}/>
        <Stack.Screen name="Frozen" component={Frozen}/>
        <Stack.Screen name="Expresso" component={Expresso}  />
       </Stack.Navigator>
       <StatusBar style="auto" />
    </NavigationContainer>
  )
}
