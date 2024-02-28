import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Coxinha() {
  return (
    <View>
        <ScrollView>
      <Detalhamento titulo={"Coxinha"} texto={"Uma deliciosa coxinha de frango com catupiry, com uma casquinha crocante e massa de mandioca. Por apenas R$6,99"} imagem={require('../../../assets/coxinha.jpg')}/>
      </ScrollView>
    </View>
  )
}