import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button
                title='Go to Sign Up Screen'
                onPress={() => alert('This is Sign Up Screen')}
            />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
