import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import {Button, Icon} from 'react-native-elements'

const Stack = createStackNavigator()

export default Comp => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            components={UserList}
            options={({ navigation }) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                )
              }
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#009955"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "bold"
  }
}