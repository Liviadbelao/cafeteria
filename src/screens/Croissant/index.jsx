import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Detalhamento from '../../components/Detalhamento/Detalhamento'

export default function Croissant() {
  return (
    <View>
       <ScrollView>
      <Detalhamento titulo={"Croissant"} texto={"Esse croissant delicioso com massa folhada otimo para tomar com um café! Por apenas R$12,99"} imagem={require('../../../assets/croissant.jpg')}/>
      </ScrollView>
    </View>
  )
}