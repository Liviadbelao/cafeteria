import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Categoria from '../../components/Categoria/Categoria';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View>
        <ScrollView>
      <Text style={styles.titulo}>Liv's Coffe</Text>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/cafeteria.jpg')} />
        <Text style={styles.texto}>
            Bem vindo a Liv's Coffe! Espero que gostem do nosso estabelecimento.
            Aqui no nosso site vocês encontraram tudo sobre os nossos produtos!
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.texto}>
            Nosso objetivo é trazer amor e alegria com as nossas guloseimas, espero que vocês se sintam em casa no nosso ambiente.
        </Text>
      </View>
     
      <Categoria titulo={"Conheça nosso cardápio de salgados!"} op={()=> navigation.navigate("Salgados")}/>
      <Categoria titulo={"Conheça nosso cardápio de Doces!"} op={()=> navigation.navigate("Doces")}/>
      <Categoria titulo={"Conheça nosso cardápio de Bebidas!"} op={()=> navigation.navigate("Bebidas")}/>
      <Categoria titulo={"Conheça um pouco sobre mim!"} op={()=> navigation.navigate("SobreMim")}/>
   
      </ScrollView>
      
    </View>
  )
}