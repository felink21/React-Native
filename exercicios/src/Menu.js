import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Contador from './components/Contador'

const MenuRoutes = {
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
    initialRouteName: 'Contador',
    tabBarOptions: {
         showLabel: true,
    }
}

const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig))
 
export default MenuNavigator