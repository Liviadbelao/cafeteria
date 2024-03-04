import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ListaItem from '../../components/ListaItem/ListaItem';

export default function Doces() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.titulo}>Doces</Text>
      <Image style={styles.img} source={require('../../../assets/Design_sem_nome__2_-removebg-preview.png')}/>
      <ListaItem titulo={"Sonho"} op={()=> navigation.navigate("Sonho")}/>
      <ListaItem titulo={"MorangoNordeste"} op={()=> navigation.navigate("MorangoNordeste")}/>
      <ListaItem titulo={"Brownie"} op={()=> navigation.navigate("Brownie")}/>
   
    </View>
  )
}