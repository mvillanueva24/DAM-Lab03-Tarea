import React, {Component} from 'react';
import {View,Text, TextInput} from 'react-native';

class AgeValidator extends Component {

    constructor(props) {
        super(props);
        this.state = {
          numAge: '',
          textAge: ''
        };
      }
    
    edad = (text) => {
        console.log(text);
        this.setState({ numAge: text });
        if (text >= 18) {
            this.setState({ textAge: 'Es mayor de edad' });
        } else if (text < 18 && text >= 0) {
            this.setState({ textAge: 'No es mayor de edad' });
        } else {
            this.setState({ textAge: 'Edad no valida' });
        }
    };

    render() {
        return(
            <View>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                keyboardType='numeric'
                onChangeText={(text) => this.edad(text)}
                value={this.state.textValue}/>
                <Text>{this.state.textAge}</Text>
            </View>
        );
    }   
  }
export default AgeValidator;