import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
    <ScrollView style = {styles.screen}>
        <View>
            <Text style = {styles.header1}>Product</Text>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    header1: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});
export default DetailScreen;