import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

import { XStyle, XColor } from 'app/config';
import * as StorageHelper from 'app/utility/StorageHelper';

import { TestView } from './TestView';



const FirstApplyDate = '20200706';
const Duration = 7;
const ApplyDateKey = 'apply-date-key';

class MainView extends Component{
  constructor(props) {
    super(props);

    this.jjButtonStyle = {
      position:'absolute',
      left:28,
      top:225,
      opacity:0
    };

  }

  componentWillMount(){
    // let now = moment();
    // let firstApplyDate = moment(FirstApplyDate);
    // let duration = moment.duration(now.diff(firstApplyDate));
    //
    // let yushu = (duration.as('days'))%Duration;
    // let lastDays = Duration - Math.ceil(yushu);

    // console.log(' 111111 -->> ', yushu);
  }

  componentDidMount(){
    this._getPrevApplyDate((date) => {
      this.endEffectDate = moment(date, "YYYYMMDD").add(Duration,'days');
      this.leftDate = this.endEffectDate.subtract('天').from(moment(), true).substring(0,1);
      console.log(' 888989898 -->> ', date, this.endEffectDate, this.leftDate);

      if(parseInt(this.leftDate) === 0) {
        this._setNextApplyDate();
      }
    });
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Image source={require('app/views/image/bg-main.png')} style={{width:'100%', height:'100%'}}/>
        <View style={{...XStyle.absoluteView}}>
          <TouchableOpacity
            activeOpacity={0} style={{...XStyle.testBorder, ...this.jjButtonStyle, borderRadius:10, paddingVertical:18, paddingHorizontal:13, backgroundColor:XColor.skyBlue}}
            onPress={this._onPress.bind(this)}>
            <Text style={{color:XColor.C5}}>进京证办理</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _onPress(){
    this._getPrevApplyDate((date) => {
      Actions.applyedJJ({applyDate:date});
    });
  }

  _getPrevApplyDate(complete){
    StorageHelper.get(ApplyDateKey, (date) => {
      complete && complete(date);
    });
  }

  _setNextApplyDate(complete){
    const nextDate = moment().add(1,'day').format('YYYYMMDD');
    StorageHelper.save(ApplyDateKey, nextDate, (success) => {

    });
  }

}


const ExportView = MainView;
module.exports.MainView = ExportView;
