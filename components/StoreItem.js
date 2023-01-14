import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';



const StoreItem = itemprops => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState("favorite");
  const toggleSwitch = () => {
        if (isEnabled) {
            setText('remove from favorites')
        } else {
            setText('favorite')
        }

        setIsEnabled(previousState => !previousState)
  }

  return (
      <View style={styles.listItem}>          
            <View style={styles.flex}>
                <Text style={styles.itemtitle}>{itemprops.title}</Text>
                <Text style={styles.itemtitle}>{itemprops.price[0]}</Text>
            </View>
            <View>
                <Image style={styles.imagestyle} source={{uri: itemprops.image}}/>
            </View>
            <Pressable onPress={toggleSwitch} style={styles.favorite}>
                <Text style={styles.favoritetext}>{text}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Product", {itemTitle: itemprops.title, itemPrice: itemprops.price, itemImage: itemprops.image,})}>
                <Text style={styles.buttontext}>View</Text>
            </Pressable>
      </View>

  );
}

const styles = StyleSheet.create({
    listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 24,
  },
    itemtitle: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 30,
  },
    flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    button: {
    backgroundColor: "#0054a2",
    height: 40,
    padding: 11,
    paddingLeft: 16,
    marginTop: 16,
    borderRadius: '50%',
  },
    buttontext: {
    color: "#ffffff", 
    textAlign: 'center',
  },
    favorite: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 24,
    backgroundColor: "#f2cd01",
    borderRadius: '50%',
  },
    favoritetext:{
        textAlign: 'center',
    },
    imagestyle: {
    height: 310,
  },
});

export default StoreItem;