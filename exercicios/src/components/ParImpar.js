import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(num) {
    const result = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{result}</Text>

    // if (num % 2 == 0) {
    //     return <Text style={Padrao.ex}>Par</Text>
    // } else {
    //     return <Text style={Padrao.ex}>Impar</Text>
    // }
}

export default props =>
    <View>
        {parOuImpar(props.numero)}

        {/* <View>
            <If test={props.numero % 2 == 0}>
                <Text style={Padrao.ex}>Par</Text>
            </If>
            <If test={props.numero % 2 == 1}>
                <Text style={Padrao.ex}>Impar</Text>
            </If>
        </View> */}

        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>