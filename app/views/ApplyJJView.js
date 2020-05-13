import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { XStyle, XColor } from 'app/config';


const styles = {
  backButton:{ position:'absolute', top:~~(0.028*XStyle.screenH), left:0 }
};

export class ApplyJJView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={{flex:1, ...XStyle.centerContainer}}>
        <Image source={require('app/views/image/bg-apply-jj.png')} style={{width:'100%', height:'100%'}}/>
        <View style={{...XStyle.absoluteView}}>
          <TouchableOpacity
            activeOpacity={1} style={{...styles.backButton, height:44, width:44}}
            onPress={() => { Actions.pop(); }}/>
        </View>
      </View>
    )
  }

}
