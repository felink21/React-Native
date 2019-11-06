import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto='Flexivel!!!!'/>
                <ParImpar numero={30} />
                <Inverter texto='girafarig' />
                <MegaSena numeros={5} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})