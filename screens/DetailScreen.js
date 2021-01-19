import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
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
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
