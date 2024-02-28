import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ListaItem from '../../components/ListaItem/ListaItem';
export default function Salgados() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Salgados</Text>
      <ListaItem titulo={"Coxinha"} op={()=> navigation.navigate("Coxinha")}/>
      <ListaItem titulo={"Enroladinho"} op={()=> navigation.navigate("Enroladinho")}/>
      <ListaItem titulo={"Croissant"} op={()=> navigation.navigate("Croissant")}/>
   
   
    </View>
  )
}