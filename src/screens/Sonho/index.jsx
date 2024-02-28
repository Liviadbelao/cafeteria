import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Sonho() {
  return (
    <View>
      <ScrollView>
      <Detalhamento titulo={"Sonho"} texto={"Conheçam o sonho mais cremoso do mundo! Por apenas R$ 10,00."} imagem={require('../../../assets/sonho.jpg')}/>
      </ScrollView>
    </View>
  )
}