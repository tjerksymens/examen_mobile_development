import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import IkeaScreen from './screens/IkeaScreen'



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Store" component={HomeScreen} />
        <Stack.Screen name = "Product" component={DetailScreen} />
        <Stack.Screen name = "CartScreen" component={CartScreen} />
        <Stack.Screen name = "Ikea" component={IkeaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
