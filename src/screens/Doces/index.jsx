import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Doces() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Doces</Text>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Sonho")}>
        <Text>Sonho</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("MorangoNordeste")}>
        <Text>Morango do Nordeste</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Brownie")}>
        <Text>Brownie</Text>
      </TouchableOpacity>
    </View>
  )
}