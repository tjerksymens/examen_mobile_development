import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <ScrollView style = {styles.screen}>
        <View style = {styles.flex}>
            <Text style = {styles.header1}>Store</Text>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('CartScreen')}>
                    <Image style = {styles.imgShoppingCart} source={require('../assets/shopping-cart.png')}/>
                </TouchableWithoutFeedback>
                <Text style={styles.amount}>0</Text>
            </View>
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
    flex: {

    },
    header1: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgShoppingCart: {
        marginTop: 10,
        marginRight: 5,
        height: 25,
        width: 25,
    },
    amount: {
        paddingLeft: 25,
    },
});
export default HomeScreen;