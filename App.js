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
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title='Go to Details Page'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
};

const DetailsScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title='Go to Details Page... again'
                onPress={() => navigation.push('Details')}
            />
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='Go Back'
                onPress={() => navigation.goBack()}
            />
            <Button
                title='Go to First Page'
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={
            {
                title: 'Overview',
                headerLeft: ()=> (
                    <Icon.Button name="ios-menu" size={25}
                    backgroundColor='#009387' onPress={()=> navigation.openDrawer()}>
                    </Icon.Button>
                )
            }
        }/>
    </HomeStack.Navigator>
);

const DetailsScreenStack = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        },
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen}
        options={{
            headerLeft: ()=> (
                <Icon.Button name="ios-menu" size={25}
                             backgroundColor='#009387' onPress={()=> navigation.openDrawer()}>
                </Icon.Button>
            )
        }}
        />
    </DetailsStack.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreenStack}/>
                <Drawer.Screen name="Details" component={DetailsScreenStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
