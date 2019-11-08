import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Campo Minado</Text>
        <Text>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>

        <Field />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
