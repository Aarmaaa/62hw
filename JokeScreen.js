import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50
        }}>
          The Perfect Son.
A: I have the perfect son.
B: Does he smoke?
A: No, he doesn't.
B: Does he drink whiskey?
A: No, he doesn't.
B: Does he ever come home late?
A: No, he doesn't.
B: I guess you really do have the perfect son. How old is he?
A: He will be six months old next Wednesday.
        </Text>
      </View>
    )
  }
}