import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Categoria({ op, titulo }) {
    
  return (
    <View>
  <TouchableOpacity
      onPress={op}>
        <Text>{titulo}</Text>
      </TouchableOpacity>
    </View>
  )
}