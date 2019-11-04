import React from 'react'
import { Text, View } from 'react-native'

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

export default props =>
    <View>
        <Text>Arrow Function 1: {props.texto}</Text>
        <Text>Arrow Function 2: {props.texto}</Text>
    </View>


// export default props => [
//     <Text key={1}>Arrow Function 1: {props.texto}</Text>,
//     <Text key={2}>Arrow Function 2: {props.texto}</Text>
// ]

// export default props => {
//     return [
//         <Text key={1}>Arrow Function 1: {props.texto}</Text>,
//         <Text key={2}>Arrow Function 2: {props.texto}</Text>
//     ]
// }