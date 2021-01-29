/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import
{
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
}
    from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';

import {
    Provider as PaperProvider,
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingScreen from './screens/SettingScreen';
import RootStackScreen from './screens/RootStackScreen';
import {ActivityIndicator} from 'react-native-paper';

import {AuthContext} from './components/context';

import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const customDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors:{
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            backgroundColor: '#ffffff',
            text:'#333333'
        }
    };

    const customDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors:{
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            backgroundColor: '#333333',
            text: '#ffffff'
        }
    };

    const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            // setUserToken('fjak');
            // setIsLoading(false);

            let userToken = String(foundUser[0].userToken);
            let userName = foundUser[0].userName;
            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: async () => {
            // setUserToken(null);
            // setIsLoading(false);
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
            // setUserToken('fjak');
            // setIsLoading(false);
            // dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        },
    }), []);

    React.useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    {loginState.userToken !== null ? (
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
        </PaperProvider>
    );
};

export default App;
