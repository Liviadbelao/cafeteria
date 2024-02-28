import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Liv's Coffe</Text>
      <TouchableOpacity
      onPress={()=> navigation.navigate("SobreMim")}>
        <Text>Conheça mais sobre mim!</Text>
      </TouchableOpacity>
    </View>
  )
}