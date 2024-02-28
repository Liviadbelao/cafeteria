import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Categoria from '../../components/Categoria/Categoria';

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
      <Categoria titulo={"Conheça mais sobre mim!"} op={()=> navigation.navigate("SobreMim")}/>
      <Categoria titulo={"Conheça nosso cardápio de salgados!"} op={()=> navigation.navigate("Salgados")}/>
      <Categoria titulo={"Conheça nosso cardápio de Doces!"} op={()=> navigation.navigate("Doces")}/>
      <Categoria titulo={"Conheça nosso cardápio de Bebidas!"} op={()=> navigation.navigate("Bebidas")}/>
   

      
    </View>
  )
}