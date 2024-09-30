import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/components/Tab'

export default () => (

    <NavigationContainer>
      <SafeAreaView style={{ flex: 1}}>
        <Tab />
      </SafeAreaView>
    </NavigationContainer>
  
)

