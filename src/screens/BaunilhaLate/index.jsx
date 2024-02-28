import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function BaunilhaLate() {
  return (
    <View>
      <ScrollView>
      <Detalhamento titulo={"Bounilha Latte"} texto={"Um delicioso café com essência de baunilha, que deixa tudo mais saboroso, essa bebida é de outro mundo e uma experiência única, com leite e espuma de baunilha de dar água na boca! Três tamanho de xícara P, M ou G."} imagem={require('../../../assets/baunilhalatte.jpg')}/>
      </ScrollView>
    </View>
  )
}