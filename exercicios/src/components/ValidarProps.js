import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props =>
    <Text style={{ fontSize: 35}}>
        {props.label}{props.ano}
    </Text>

// Padrão
ValidarProps.defaultProps = {
    label: 'Ano: '
}
// Validar tipo
ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps