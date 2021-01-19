/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
                <Drawer.Screen name="SupportScreen" component={SupportScreen}/>
                <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}/>
                <Drawer.Screen name="SettingsScreen" component={SettingScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
