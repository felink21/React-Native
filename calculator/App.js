import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './src/component/Button'
import Display from './src/component/Display'

export default class App extends Component {

  state = {
    displayValue: '0'
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
          <Button label='=' />
        </View>
      </View>
    )
  }

  // Funções
  addDigit = n => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      n = ''
    }
    let junta = this.state.displayValue.concat(n)
    if (junta[0] === '0' && junta[1] !== '.') {
      junta = junta.substring(1, junta.length);
    }
    this.setState({ displayValue: junta })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0'})
  }

  setOperation = operation => {
    const lista = Array(2)










  }
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