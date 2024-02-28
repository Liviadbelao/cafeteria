import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Enroladinho() {
  return (
    <View>
           <ScrollView>
      <Detalhamento titulo={"Enroladinho"} texto={"Esse enroladinho de presunto e mussarela te deixará com água na boca, essa delicícia feita com massa de mandioca! Por apenas R$6,99"} imagem={require('../../../assets/enroladinho.jpg')}/>
      </ScrollView>
    </View>
  )
}