import React, { Component } from 'react';
import { View, StyleSheet, AppState, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { XStyle, XColor } from 'app/config';



class MainView extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity
          activeOpacity={0.8} style={{padding:20}}
          onPress={() => { Actions.auth() }}>
          <Text style={{color:XColor.C5}}>MainView</Text>
        </TouchableOpacity>
      </View>
    )
  }

}


const ExportView = MainView;
module.exports.MainView = ExportView;
