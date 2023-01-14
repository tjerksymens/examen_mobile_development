import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';

const DetailScreen = ({ navigation, route },) => {
    
    return (
    <ScrollView style = {styles.screen}>
        <View>
            <Text style = {styles.header1}>{route.params.itemTitle}</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
                <Text> ⬅️  Go back to store</Text>
            </TouchableWithoutFeedback>
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