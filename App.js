import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SpendByCategory from './screens/SpendByCategory';
import { init } from '@database';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewExpense from '@screens/NewExpense';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    init()
      .then(() => {
        console.log('Initialized database');
      })
      .catch((err) => {
        console.log('Initializing db failed.');
        console.log(err.message);
      });
  }, []);

  const defaultNavOptions = {
    headerShown: false,
  };

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SpendByCategory" screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
      }}>
        <Stack.Screen name="SpendByCategory" component={SpendByCategory} options={{
          headerLeft: () => null,
          headerTitle: '',
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <TouchableOpacity onPress={() => navigation.navigate('ConfigScreen')}>
              <Ionicons name="settings-outline" size={24} style={{ marginRight: 15 }} />
            </TouchableOpacity>
          )},
          headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
          },
        }} />
        <Stack.Screen name="NewExpense" component={NewExpense} options={{
          headerLeft: () => null,
          headerTitle: 'New Expense',
          headerRight: () => {
            const navigation = useNavigation();
            return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color="black" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          )},
          headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
          },
        }} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}