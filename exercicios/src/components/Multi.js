import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

const Inverter = props => {
    const invertido = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{invertido}</Text>
}

const MegaSena = props => {
    const min = 1
    const max = 60
    const numeros = Array(props.numeros || 6).fill(0)

    for (let index = 0; index < numeros.length; index++) {
        let novo = 0
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[index] = novo
    }
    numeros.sort((a, b) => a - b)
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

export default Inverter
export { Inverter, MegaSena }