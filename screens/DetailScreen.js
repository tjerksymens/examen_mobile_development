import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, Image } from 'react-native';

const DetailScreen = ({ navigation, route },) => {
    
    return (
    <ScrollView style = {styles.screen}>
        <View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
                <Text> ⬅️  Go back to store</Text>
            </TouchableWithoutFeedback>
            {/*items inladen van vorige pagina*/}
            <Text style = {styles.header1}>{route.params.itemTitle}</Text>
            <Image style = {styles.img} source={{uri: route.params.itemImage}}/>
            <Text style = {styles.header2}>{route.params.itemPrice[0]}</Text>
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
        paddingTop: 16,
    },
    header2: {
        fontSize: 24,
        fontWeight: '600',
        color:"#0054a2",

    },
    img: {
        height: 300,
    }
});
export default DetailScreen;