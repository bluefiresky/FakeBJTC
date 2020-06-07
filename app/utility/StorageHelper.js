import { Platform, NativeModules } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


/**
 * Keys
 * **/
export const Keys = {
};


/**
 * Function && database
 * **/
export function save(key, data, successCallback){
  try {
    AsyncStorage.setItem(key, JSON.stringify(data)).then(res => {
      successCallback&&successCallback();
    });
  } catch (e) {
    console.log('%c StorageHelper Save -- key: '+key+' -- and error -->> ', 'color:red', e);
  }
}

export function get(key, complete) {
  try {
    AsyncStorage.getItem(key, (error, result) => {
      if(!error){
        complete(JSON.parse(result));
      }else complete(null);
    })
  } catch (e) {
    console.log('%c StorageHelper Get -- key: '+key+' -- and error -->> ', 'color:red', e);
  }
}
