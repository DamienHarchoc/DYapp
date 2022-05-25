import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import Realisations from './screens/Realisations';
import SavoirFaire from './screens/SavoirFaire';
import Contact from './screens/Contact';


const Tab = createBottomTabNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Realisations'){
              iconName = focused ? 'hammer' : 'hammer-outline';
            } else if (route.name === 'SavoirFaire'){
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Contact'){
              iconName = focused ? 'book' : 'book-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Realisations" component={Realisations} options={{headerShown: false}}/>
        <Tab.Screen name="SavoirFaire" component={SavoirFaire} options={{headerShown: false }}/>
        <Tab.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

