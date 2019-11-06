import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao'

const Entrada = props =>
    <View>
        <TextInput style={Padrao.input}
            value={props.texto}
            onChangeText={props.chamarQuandoMudar} />
    </View>

class TextoSincronizado extends Component {

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
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto} />
            </View>
        )
    }
}

export { Entrada }
export default TextoSincronizado