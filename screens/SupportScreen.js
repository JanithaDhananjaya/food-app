import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Support Screen</Text>
            <Button
                title='Go to Support Page'
                onPress={() => alert('This is Support Page')}
            />
        </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
