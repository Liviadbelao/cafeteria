import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Detalhamento({ texto, titulo, imagem}) {
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
     
      <Image style={styles.image} source={imagem}/>
      <Text>{texto}</Text>
    </View>
  )
}
