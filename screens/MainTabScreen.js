import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import DetailsScreen from './DetailScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        style={{backgroundColor: 'tomato'}}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreenStack}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Details"
            component={DetailsScreenStack}
            options={{
                tabBarLabel: 'Details',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="message" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="account" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#d02B60',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="network" color={color} size={26}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeScreenStack = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        },
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={
            {
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                                 backgroundColor='#009387' onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                ),
            }
        }/>
    </HomeStack.Navigator>
);

const DetailsScreenStack = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        },
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen}
                             options={{
                                 headerLeft: () => (
                                     <Icon.Button name="ios-menu" size={25}
                                                  backgroundColor='#1f65ff' onPress={() => navigation.openDrawer()}>
                                     </Icon.Button>
                                 ),
                             }}
        />
    </DetailsStack.Navigator>
);
