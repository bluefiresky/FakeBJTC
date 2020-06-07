import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, NativeModules } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { XStyle, XColor } from 'app/config';


class TestView extends Component{
  constructor(props) {
    super(props);

    this.state = {
      pushResult:''
    }
  }

  render(){
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity
          activeOpacity={0.8} style={{paddingVertical:12, paddingHorizontal:22, borderRadius:8, borderColor:'blue', borderWidth:1}}
          onPress={this._onPress}>
          <Text style={{color:'black', fontSize:15}}>发送</Text>
        </TouchableOpacity>
        <Text style={{color:'red', fontSize:22, marginTop:30, alignSelf:'flex-start'}}>结果</Text>
        <Text style={{color:'blue', fontSize:15, marginTop:12}}>{this.state.pushResult}</Text>
      </View>
    )
  }

  _onPress(){
    NativeModules.PushModule.push((res) => {

    });
  }

}


const ExportView = TestView;
module.exports.TestView = ExportView;
