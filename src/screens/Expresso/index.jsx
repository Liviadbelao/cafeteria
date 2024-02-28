import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Expresso() {
  return (
    <View>
      <ScrollView>
      <Detalhamento titulo={"Café Espresso"} texto={"Um delicioso café espresso com grãos de café brasileiro moidos! Três tamanho de xícara P, M ou G."} imagem={require('../../../assets/espresso.jpg')}/>
      </ScrollView>
    </View>
  )
}