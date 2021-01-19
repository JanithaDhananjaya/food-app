import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
            <Button
                title='Go to Explore Page'
                onPress={() => alert('This is Explore Page')}
            />
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
