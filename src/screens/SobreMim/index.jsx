import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
export default function SobreMim() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.titulo}>SobreMim</Text>
      <Image style={styles.img} source={require('../../../assets/livia.jpg')}/>
      <View style={styles.container}>
     <Text style={styles.texto}> Olá meu nome é Lívia Belão, sou proprietária do Liv's Coffe. </Text>
     </View>
     <View style={styles.container}>
     <Text style={styles.texto}> Esse café é uma realização para mim, sempre gostei de doces e experimentar diversos tipos de café. Meu objetivo é sempre trazer amor e carinho para os meus clientes, espero que gostem do meu estabelicimento! </Text>
     </View>
     <TouchableOpacity style={styles.texto3}
      onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.texto2}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}