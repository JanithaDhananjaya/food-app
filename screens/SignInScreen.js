import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button
                title='Go to Sign In Screen'
                onPress={() => alert('This is Sign In Screen')}
            />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
