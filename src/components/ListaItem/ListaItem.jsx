import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
const ListaItem = ({ op, titulo }) => {
    
  return (
    <View >
      <View style={styles.container}>
  <TouchableOpacity
      onPress={op}>
        
        <Text style={styles.texto}>{titulo}</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}
export default ListaItem