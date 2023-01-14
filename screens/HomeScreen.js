import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback, FlatList, TextInput, Image, Pressable } from 'react-native';

import StoreItem from '../components/StoreItem';

const HomeScreen = ({ navigation }) => {

    const [content, setContent] = useState([]);

    const getItems = async () => {
        //cms verbinden
        const response = await fetch("https://tjerksymens.be/wp-json/wp/v2/posts?categories=9", {})
            const json = await response.json();
            setContent(json)
        }

        //items laden
        useEffect(() => {
            getItems();
        }, []);


        const getDesksByTitleSearch = async (enteredText) => {
        const url = encodeURI("https://tjerksymens.be/wp-json/wp/v2/posts?slug=" + enteredText + "/");
            const response = await fetch(url)
            const json = await response.json();
    }

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
        <TextInput
            style={styles.searchfield}
            placeholder="search a desk"
            placeholderTextColor="#1e1e1e" 
            onChangeText={getDesksByTitleSearch}
        />
    
        <FlatList
        data={content}
        renderItem={
        ({ item }) => (
            <StoreItem
            title={item.title.rendered}
            />
        )}/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        backgroundColor:"#ffffff",
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
    searchfield: {
        marginTop: 16,
        marginBottom: 8,
        paddingVertical: 8,
        paddingLeft: 16,
        backgroundColor: "#f2f2f2",
        borderRadius: '50%',
  },
});
export default HomeScreen;