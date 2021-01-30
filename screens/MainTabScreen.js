import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import DetailsScreen from './DetailScreen';
import {Avatar, useTheme} from 'react-native-paper';

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
                tabBarColor: '#FF6347',
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
                tabBarColor: '#FF6347',
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
                tabBarColor: '#FF6347',
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
                tabBarColor: '#FF6347',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="network" color={color} size={26}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeScreenStack = ({navigation}) => {
    const {colors} = useTheme();

    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.backgroundColor,
                elevation: 0,
            },
            headerTintColor: colors.text,
            headerTintStyle: {
                fontWeight: 'bold',
            },
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={
                {
                    title: 'Food Finder',
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <Icon.Button name="ios-menu"
                                         size={25}
                                         backgroundColor={colors.backgroundColor}
                                         color={colors.text}
                                         onPress={() => navigation.openDrawer()}>
                            </Icon.Button>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{flexDirection: 'row', marginRight: 10}}>
                            <Icon.Button name="ios-search"
                                         size={25}
                                         backgroundColor={colors.backgroundColor}
                                         color={colors.text}
                                         onPress={() => navigation.openDrawer()}>
                            </Icon.Button>
                            <TouchableOpacity
                                style={{paddingHorizontal: 10, marginTop: 5}}
                                onPress={() => navigation.navigate('Profile')}
                            >
                                <Avatar.Image
                                    source={{
                                        uri: 'data:image/jpeg;base64,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',
                                    }}
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }
            }/>
        </HomeStack.Navigator>
    );
};

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
