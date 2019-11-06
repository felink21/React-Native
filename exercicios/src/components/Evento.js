import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {
// Component controlado [formulário]
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>
                    {this.state.texto}
                </Text>
                <TextInput style={Padrao.input}
                    value={this.state.texto}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}