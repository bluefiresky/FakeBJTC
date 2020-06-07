
import {Platform, Dimensions, StyleSheet, PixelRatio, Text} from "react-native"
import React from "react"; /** 应用所需基础颜色  */

const { width, height } = Dimensions.get("window");
export const W = width;
export const H = height;


export const styles = {
  screenW:W,
  screenH:H,
  absoluteView:{ top:0, right:0, bottom:0, left:0, position:'absolute' },
  centerContainer:{ alignItems:'center', justifyContent:'center' },
  centerRow:{ flexDirection:'row', alignItems:'center' },
  testBorder:{ borderWidth:1, borderColor:'#333333' }
};
