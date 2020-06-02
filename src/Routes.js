import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Splash from './components/Splash';
import Login from './components/Login';
import Chat from './components/Chat';
const Routes= createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: false
        }
    },
    Login: {
        screen: Login,
         headerMode: 'none' ,
        navigationOptions: {
            header: false
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: false
        }
    }
    
});
  export default createAppContainer(Routes);


// export default StackNavigator({
//     SplashScreen: { screen: SplashScreen },
//     AuthScreen: { screen: AuthScreen },
//     MainNavigator: { screen: MainNavigator }
//   }, {
//     headerMode: 'screen',
//     navigationOptions: {
//       header: { visible: false }
//     }
//   })