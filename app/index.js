import React, { Component } from 'react';
import { View, StyleSheet, AppState, ActivityIndicator, Text, NativeAppEventEmitter, Platform, DeviceEventEmitter } from 'react-native';

import { Actions, Router, Scene, Modal, OpenPro, Overlay, Stack, Lightbox, Drawer } from 'react-native-router-flux';
import { StackViewStyleInterpolator } from 'react-navigation-stack';

import Scenes from './views';


const stateHandler = (prevState, newState, action) => {
  console.log('%c onStateChange: ACTION -->> ', action);
};

const horizontalTransition = () => ({
  screenInterpolator: StackViewStyleInterpolator.forHorizontal,
});
const verticalTransition = () => ({
  screenInterpolator: StackViewStyleInterpolator.forVertical,
});

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#F5FCFF',
  }
});

export default class FakeBJTC extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this._renderRoot();
  }

  _renderRoot(){
    return (
      <Router onStateChange={stateHandler} sceneStyle={styles.scene}>
        <Overlay key="overlay">
          <Modal key="modal" hideNavBar transitionConfig={verticalTransition}>
            {this._renderMainScene()}
            {this._renderAuth()}
          </Modal>
        </Overlay>
      </Router>
    )
  }

  _renderMainScene(){
    return (
      <Lightbox key="root">
        <Stack key='main' transitionConfig={horizontalTransition}>
          <Scene key={'main'} hideNavBar component={Scenes.MainView}/>
        </Stack>
      </Lightbox>
    )
  }

  _renderAuth(){
    return (
      <Lightbox key="auth">
        <Stack key='auth' transitionConfig={horizontalTransition}>
          <Scene key='login' component={Scenes.LoginView} back={true}/>
        </Stack>
      </Lightbox>
    )
  }
}
