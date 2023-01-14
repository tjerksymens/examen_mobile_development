import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StoreItem = itemprops => {
  const navigation = useNavigation();

  return (
      <View style={styles.listItem}>          
          <View>
            <Text style={styles.itemtitle}>{itemprops.title}</Text>
          </View>
          <Pressable style={styles.button} onPress={() => navigation.navigate("Product", {itemTitle: itemprops.title})}>
            <Text style={styles.buttontext}>View: {itemprops.title}</Text>
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
  button: {
    backgroundColor: "#000",
    height: 40,
    padding: 11,
    paddingLeft: 16,
    marginTop: 16,
    borderRadius: '50%'
  },
  buttontext: {
    color: "#ffffff", 
  },
});

export default StoreItem;