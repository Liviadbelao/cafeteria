import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Detalhamento({ texto, titulo, imagem}) {
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