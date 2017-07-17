import React, { Component } from 'react';
import { View, TextInput, Button, 
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import GreetingsList from '../components/GreetingsList';

export const GREETINGS_SCENE_NAME = 'GREETINGS_SCENE';

const PLACEHOLDER = 'Ajouter un nom';

export default class HomeScreen extends Component {

  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true
      },
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
     <View style={styles.container}>
       <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
          source={require('../../assets/NY1.jpg')}
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
