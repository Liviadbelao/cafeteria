import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const  Detalhamento = ({ texto, titulo, imagem}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{titulo}</Text>
     
      <Image style={styles.image} source={imagem}/>
      <View style={styles.texto2}>
      <Text >{texto}</Text>
      
      </View>
     
    </View>
  )
}
export default Detalhamento