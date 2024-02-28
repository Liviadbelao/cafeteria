import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ListaItem from '../../components/ListaItem/ListaItem';

export default function Bebidas() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Bebidas</Text>
      <ListaItem titulo={"BaunilhaLate"} op={()=> navigation.navigate("BaunilhaLate")}/>
      <ListaItem titulo={"Expresso"} op={()=> navigation.navigate("Expresso")}/>
      <ListaItem titulo={"Frozen"} op={()=> navigation.navigate("Frozen")}/>
   
    </View>
  )
}