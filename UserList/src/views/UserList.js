import React from 'react';
import {View, Flatlist} from 'react-native'
import { ListItem, Avatar, Icon } from '@rneui/themed';
import users from '../data/users';
import { Button } from 'react-native-elements';

export default comp => {
    function getActions(user){
        return(
            <>
                <Button
                    onPress={() => comp.navigation.navigate("Userform", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="black"/>}
                    icon1={<Icon name="ios-american-football" type='ionicon' color='#517fa4'/>}
                />
                <Button
                    onPress={() => comp.navigation.navigate('Userform', user)}
                    type="clear"
                    icon2={<Icon name='delete' size={25} color='red' />}
                />
            </>
        )
    }

    
    function getUserItem({ item:user }){
        return(
            <ListItem
                rightElement={getActions(user)}
                bottomDivider
                onPress={() => comp.navigation.navigate("UserForm")}
            >
                <Avatar size={50} rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.nome}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return(
        <View>
            <Flatlist
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}