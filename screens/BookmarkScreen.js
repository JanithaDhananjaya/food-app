import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const BookmarkScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Bookmark Screen</Text>
            <Button
                title='Go to Bookmark Page'
                onPress={() => alert('This is Bookmark Page')}
            />
        </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
