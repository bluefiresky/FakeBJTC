import React, { Component } from 'react';
import { View, StyleSheet, AppState, ActivityIndicator, Text, NativeAppEventEmitter, Platform, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { XStyle, XColor } from 'app/config';



export class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: XColor.C5}}>LoginView</Text>
      </View>
    )
  }

}
