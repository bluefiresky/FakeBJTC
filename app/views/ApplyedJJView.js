import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

import { XStyle, XColor } from 'app/config';


const styles = {
  backButton:{ position:'absolute', top:~~(0.028*XStyle.screenH), left:0 },
  leftDays:{ position:'absolute', top:237, left:90 },
  leftDate:{ position:'absolute', top:277, left:29 },
  textColor:'rgb(241,150,27)'
};

const KeepDays = 7;

export class ApplyedJJView extends Component {
  constructor(props) {
    super(props);


    this.effectDate = moment(this.props.applyDate, "YYYYMMDD");
    this.endEffectDate = moment(this.props.applyDate, "YYYYMMDD").add(KeepDays,'days');
    this.currentDate = moment();
    this.leftDate = this.endEffectDate.subtract('天').from(this.currentDate, true).substring(0,1);
  }

  render(){
    return (
      <View style={{flex:1, ...XStyle.centerContainer}}>
        <Image source={require('app/views/image/bg-applyed-jj.png')} style={{width:'100%', height:'100%'}}/>
        <View style={{...XStyle.absoluteView}}>
          <TouchableOpacity
            activeOpacity={1} style={{...styles.backButton, height:44, width:44}}
            onPress={() => { Actions.pop(); }}/>
          <View
            activeOpacity={1} style={{...XStyle.centerRow, backgroundColor:'white', ...styles.leftDays, minWidth:60}}>
            <Text style={{includeFontPadding:false, textAlign:'center', textAlignVertical:'center', color:styles.textColor, fontSize:32, fontWeight:'bold'}}>{this.leftDate}</Text>
            <Text style={{includeFontPadding:false, textAlign:'center', textAlignVertical:'center', color:styles.textColor, fontSize:28, fontWeight:'bold'}}>天</Text>
          </View>
          <View
            activeOpacity={1} style={{...XStyle.centerRow, backgroundColor:'white', ...styles.leftDate, paddingRight:20}}>
            <Text style={{includeFontPadding:false, textAlign:'center', textAlignVertical:'center', color:styles.textColor, fontSize:16, fontWeight:'bold'}}>{this._getFormatDate(this.effectDate)}</Text>
            <Text style={{includeFontPadding:false, textAlign:'center', textAlignVertical:'center', color:styles.textColor, fontSize:16, fontWeight:'bold'}}>生效</Text>
          </View>
        </View>
      </View>
    )
  }

  _getFormatDate(date){
    return date.format('MM月DD日')
  }

}
