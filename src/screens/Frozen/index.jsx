import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Frozen() {
  return (
    <View>
      <ScrollView>
   <Detalhamento titulo={"Frozen (café gelado)"} texto={"Nosso delicioso Frozen de café, é nada mais nada menos que o nosso melhor café batido com leite e gelo e delicioso chantily por cima com cauda de chocolate!"} imagem={require('../../../assets/frozen.jpg')}/>
   </ScrollView>
   </View>
  )
}