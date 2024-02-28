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

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="SobreMim" component={SobreMim}
        options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Salgados" component={Salgados} 
        options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Doces" component={Doces} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Bebidas" component={Bebidas} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Coxinha" component={Coxinha} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Enroladinho" component={Enroladinho}options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Croissant" component={Croissant} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Sonho" component={Sonho} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="MorangoNordeste" component={MorangoNordeste} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Brownie" component={Brownie}options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="BaunilhaLate" component={BaunilhaLate}options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Frozen" component={Frozen}options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
        <Stack.Screen name="Expresso" component={Expresso} options={{
          title: "Liv's Coffe",
         
          headerStyle: {
            backgroundColor: "#A52A2A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
         }} />
       </Stack.Navigator>
       <StatusBar style="auto" />
    </NavigationContainer>
  )
}
