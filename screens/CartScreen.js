import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, Image, FlatList } from 'react-native';

const CartScreen = ({ navigation }) => {
    return (
    <ScrollView style = {styles.screen}>
        <View>
            <Text style = {styles.header1}>Schopping cart</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
                <Text> ⬅️  Go back to store</Text>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.listItem}>
            <Text style={styles.itemtitle}>€249 TROTTEN desk</Text>
        </View>
        <View style={styles.listItem}>
            <Text style={styles.itemtitle}>€299 IDASEN desk</Text>
        </View>
        <View style={styles.listItem}>
            <Text style={styles.itemtitle}>€619 UPPSPEL desk</Text>
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
        paddingBottom: 16,
    },
    itemtitle: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 30,
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 24,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default CartScreen;