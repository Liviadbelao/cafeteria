import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ListaItem from '../../components/ListaItem/ListaItem';

export default function Bebidas() {
  const navigation = useNavigation();
  return (
    <View>
      <Text  style={styles.titulo}>Bebidas</Text>
      <Image style={styles.img} source={require('../../../assets/Design_sem_nome__1_-removebg-preview.png')}/>
      <ListaItem titulo={"BaunilhaLate"} op={()=> navigation.navigate("BaunilhaLate")}/>
      <ListaItem titulo={"Expresso"} op={()=> navigation.navigate("Expresso")}/>
      <ListaItem titulo={"Frozen"} op={()=> navigation.navigate("Frozen")}/>
   
    </View>
  )
}