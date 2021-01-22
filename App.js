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
import {View} from 'react-native';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingScreen from './screens/SettingScreen';
import RootStackScreen from './screens/RootStackScreen';
import {ActivityIndicator} from 'react-native-paper';

import {AuthContext} from './components/context';

const Drawer = createDrawerNavigator();

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('fjak');
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('fjak');
            setIsLoading(false);
        },
    }));

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken !== null ? (
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
                        <Drawer.Screen name="SupportScreen" component={SupportScreen}/>
                        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen}/>
                        <Drawer.Screen name="SettingsScreen" component={SettingScreen}/>
                    </Drawer.Navigator>
                ) : (
                    <RootStackScreen/>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default App;
