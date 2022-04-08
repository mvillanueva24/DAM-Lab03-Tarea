import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View, 
  Image, 
  TextInput,
} from 'react-native';
import Message from './app/components/message/Message';
import Body from './app/components/body/Body';
import AgeValidator from './app/components/ageValidator/AgeValidator';
import ListImg from './app/components/flatlist/ListImg';
const provincias = [
  {
    id: 1,
    name: 'Arequipa',
  }, 
  {
    id: 2,
    name: 'Puno',
  },
  {
    id: 3,
    name: 'Cuzco',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
      numAge: '',
    };
  }

  changeTextInput = (text) => {
    console.log(text);
    this.setState({ textValue: text });
  };

  edad = (num) => {
    console.log(num);
    this.setState({ numAge: num });
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Message/>
        <View style={styles.text}>
          <Text>Ingresa tu edad</Text>
        </View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.changeTextInput(text)}
          value={this.state.textValue}
        />
        
        <Body textBody={'Texto en Body'} onBodyPress={this.onPress}/>
        
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>{this.state.count}</Text>
        </View>

        {provincias.map(item => (
          <View>
            <Text>{item.name}</Text>
          </View>  
        ))}

        <Text> </Text>

        <AgeValidator></AgeValidator>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  countContainer:{
    top: 10,
    alignItems:'center',
    padding: 1,
  }
}); 