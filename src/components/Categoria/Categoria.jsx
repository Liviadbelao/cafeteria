import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
const Categoria = ({ op, titulo }) => {
    
  return (
    <View style={styles.container}>
  <TouchableOpacity
      onPress={op}>
        <Text style={styles.texto}>{titulo}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Categoria;