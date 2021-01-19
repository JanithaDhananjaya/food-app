import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title='Go to Profile Page'
                onPress={() => alert('This is Profile Page')}
            />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
