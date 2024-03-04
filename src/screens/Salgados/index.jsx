import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ListaItem from '../../components/ListaItem/ListaItem';
export default function Salgados() {
  const navigation = useNavigation();
  return (
    <View>
      <Text  style={styles.titulo}>Salgados</Text>
      <Image style={styles.img} source={require('../../../assets/Design_sem_nome-removebg-preview.png')}/>
      <ListaItem titulo={"Coxinha"} op={()=> navigation.navigate("Coxinha")}/>
      <ListaItem titulo={"Enroladinho"} op={()=> navigation.navigate("Enroladinho")}/>
      <ListaItem titulo={"Croissant"} op={()=> navigation.navigate("Croissant")}/>
      <TouchableOpacity style={styles.texto3}
      onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
   
    </View>
  )
}