import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <View style = {styles.screen}>
      <Text>Home screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default HomeScreen;