import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
export default function Salgados() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Salgados</Text>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Coxinha")}>
        <Text>Coxinha</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Enroladinho")}>
        <Text>Enroladinho</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Croissant")}>
        <Text>Croissant</Text>
      </TouchableOpacity>
    </View>
  )
}