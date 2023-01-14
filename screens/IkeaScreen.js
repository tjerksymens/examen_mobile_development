import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, Linking, Button} from 'react-native';

const CartScreen = ({ navigation }) => {
    return (
    <ScrollView style = {styles.screen}>
        <View>
            <Text style = {styles.header1}>Chech our bigger assortiment on our website</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Store')}>
                <Text> ⬅️  Go back to store</Text>
            </TouchableWithoutFeedback>
            <Button style = {styles.button} title="To Ikea" onPress={() => Linking.openURL('https://www.ikea.com/be/nl/cat/bureaus-computer-bureaus-20649/')}/>
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
});
export default CartScreen;