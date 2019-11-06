import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm} >
                    <Text style={{fontSize: 30}}>Incrementar</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.menosUm} >
                    <Text style={{fontSize: 30}}>Decrementar</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onLongPress={this.limpar}>
                    <Text style={{fontSize: 30}}>Zerar (segurar)</Text>
                </TouchableHighlight>
            </View>
        )
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    menosUm = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    limpar = () => {
        this.setState({
            numero: this.props.numeroInicial
        })
    }
}