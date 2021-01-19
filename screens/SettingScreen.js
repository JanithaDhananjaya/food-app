import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button
                title='Go to Settings Page'
                onPress={() => alert('This is Settings Page')}
            />
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
