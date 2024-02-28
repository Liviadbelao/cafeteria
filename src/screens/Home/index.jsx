import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Liv's Coffe</Text>
      <View>
        <Text>
            Bem vindo a Liv's Coffe! Espero que gostem do nosso estabelecimento.
            Aqui no nosso site vocês encontraram tudo sobre os nossos produtos!
        </Text>
      </View>
      <View>
        <Text>
            Nosso objetivo é trazer amor e alegria com as nossas guloseimas, espero que vocês se sintam em casa no nosso ambiente.
        </Text>
      </View>
      <TouchableOpacity
      onPress={()=> navigation.navigate("SobreMim")}>
        <Text>Conheça mais sobre mim!</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Salgados")}>
        <Text>Conheça nosso cardápio de salgados!</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Doces")}>
        <Text>Conheça nosso cardápio de Doces!</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Bebidas")}>
        <Text>Conheça nosso cardápio de Bebidas!</Text>
      </TouchableOpacity>
    </View>
  )
}