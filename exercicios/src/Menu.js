import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

const MenuRoutes = {
    Flex: {
        screen: () => <Flex />,
        navigationOptions: { title: 'Figura' }
    },
    ListaFlex: {
        screen: () => <ListaFlex />,
        navigationOptions: { title: 'Flex' }
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado />,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />,
        navigationOptions: { title: 'Avo' }
    },
    Evento: {
        screen: () => <Evento />,
        navigationOptions: { title: 'Evento' }
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={2019} />,
        navigationOptions: { title: 'Validar Props' }
    },
    Plataformas: {
        screen: () => <Plataformas />,
        navigationOptions: { title: 'Plataformas' }
    },
    Contador: {
        screen: () => <Contador numeroInicial={0}/>,
        navigationOptions: { title: 'Contador' }
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='GirafariG!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!' />
    }
}

const MenuConfig = {
    initialRouteName: 'Flex',
    tabBarOptions: {
         showLabel: true,
    }
}

const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig))
 
export default MenuNavigator