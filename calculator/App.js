import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './src/component/Button'
import Display from './src/component/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {

  state = {
    ...initialState
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={() => this.setOperation('/')}/>
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={() => this.setOperation('*')}/>
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={() => this.setOperation('-')}/>
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={() => this.setOperation('+')}/>
          <Button label='0' double onClick={this.addDigit} />
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' operation onClick={() => this.setOperation('+')}/>
        </View>
      </View>
    )
  }

  // Funções
  addDigit = n => {
    //console.debug(typeof this.state.displayValue)
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay
    
    if (n === '.' && 
        !clearDisplay && 
        this.state.displayValue.includes('.')) {
      return
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }


  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const isEquals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: isEquals ? null : operation,
        current: isEquals ? 0: 1,
        //clearDisplay: !isEquals,
        clearDisplay: true,
        values
      })
    }
  }


//  addDigit = n => {
//     if (n === '.' && this.state.displayValue.includes('.')) {
//       n = ''
//     }
//     let junta = this.state.displayValue.concat(n)
//     if (junta[0] === '0' && junta[1] !== '.') {
//       junta = junta.substring(1, junta.length);
//     }
//     this.setState({ displayValue: junta })
//   }


//   setOperation = operation => {
//     if (operation === '+' && (this.state.displayValue.includes('+')|| 
//                               this.state.displayValue.includes('-')|| 
//                               this.state.displayValue.includes('*')||
//                               this.state.displayValue.includes('/'))) {
//       operation = ''
//     }
//     let lista = Array(2)
//     let result = 0
//     const operador1 = this.state.displayValue
//     const operador2 = 0
//     lista[0] = parseFloat(operador1)
//     lista[1] = parseFloat(operador2)

//     if (operation === '+') {
//       result = operador1 + operador2
//     }
//   }
// }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})