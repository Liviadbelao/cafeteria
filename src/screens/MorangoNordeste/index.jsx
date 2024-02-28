import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function MorangoNordeste() {
  return (
    <View>
      <ScrollView>
      <Detalhamento titulo={"Morango do Nordeste"} texto={"Um bombom de morango com o melhor recheio de leite ninho e casquinha de chocolate! Por apenas R$ 10,00."} imagem={require('../../../assets/morangodonordeste.jpg')}/>
      </ScrollView>
    </View>
  )
}