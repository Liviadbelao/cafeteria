import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Brownie() {
  return (
    <View>
           <ScrollView>
      <Detalhamento titulo={"Brownie"} texto={"Esse brownie de chocolate possui a casquinha mais crocante do Brasil! Por apenas R$ 8,00."} imagem={require('../../../assets/brownie.jpg')}/>
      </ScrollView>
    </View>
  )
}