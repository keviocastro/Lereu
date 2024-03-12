import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SpendByCategory from './screens/SpendByCategory';

export default function App() {
  return (
    <View style={styles.container}>
      <SpendByCategory />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
  },
});
