import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback, FlatList, TextInput, Image, Pressable } from 'react-native';

import StoreItem from '../components/StoreItem';

const HomeScreen = ({ navigation }) => {

    const [content, setContent] = useState([]);

    const getItems = async () => {
        //cms verbinden
            try{
            const response = await fetch("https://tjerksymens.be/wp-json/wp/v2/posts?categories=9", {})
            const json = await response.json();
            setContent(json)
            } catch (error) {
                console.error(error);
            }
        }

        //items laden
        useEffect(() => {
            getItems();
        }, []);


        //searchbar
        const getDesksByTitleSearch = async (enteredText) => {
        try {
            if (enteredText.length > 2) {
            const url = encodeURI("https://tjerksymens.be/wp-json/wp/v2/posts?slug=" + enteredText + "/");
            const response = await fetch(url);
            const json = await response.json();
            setContent(json);
            } else{
            getItems();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
    <ScrollView style = {styles.screen}>
        <View style = {styles.flex}>
            <Text style = {styles.header1}>Store</Text>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('CartScreen')}>
                    <Image style = {styles.imgShoppingCart} source={require('../assets/shopping-cart.png')}/>
                </TouchableWithoutFeedback>
                <Text style={styles.amount}>3</Text>
            </View>
        </View>

        <TextInput
            style={styles.searchbar}
            placeholder="search a desk"
            placeholderTextColor="#1e1e1e" 
            onChangeText={getDesksByTitleSearch}
        />
    
        <FlatList
        data={content}r
        renderItem={
        ({ item }) => (
            <StoreItem
            title={item.title.rendered}
            //yoast_head is plugin wp 
            price={item.yoast_head_json.og_description.split(' ')}
            image={item.yoast_head_json.og_image[0].url}
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
    searchbar: {
        marginTop: 16,
        marginBottom: 8,
        paddingVertical: 8,
        paddingLeft: 16,
        backgroundColor: "#f2f2f2",
        borderRadius: '50%',
  },
});
export default HomeScreen;