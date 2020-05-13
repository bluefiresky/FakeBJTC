import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { XStyle, XColor } from 'app/config';



class MainView extends Component{
  constructor(props) {
    super(props);

    this.jjButtonStyle = {
      position:'absolute',
      right:32,
      top:256,
      opacity:0
    }
  }

  componentWillMount(){
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Image source={require('app/views/image/bg-main.png')} style={{width:'100%', height:'100%'}}/>
        <View style={{...XStyle.absoluteView}}>
          <TouchableOpacity
            activeOpacity={0} style={{...this.jjButtonStyle, borderRadius:10, paddingVertical:18, paddingHorizontal:13, backgroundColor:XColor.skyBlue}}
            onPress={() => { Actions.applyJJ() }}>
            <Text style={{color:XColor.C5}}>进京证办理</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}


const ExportView = MainView;
module.exports.MainView = ExportView;
