import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function getSkyColor() {
  return process.env.SKY_COLOR || 'undefined';
}

function getGrassColor() {
  return process.env.GRASS_COLOR || 'undefined';
}

function getESkyColor() {
  return process.env.EXPO_PUBLIC_SKY_COLOR || 'undefined';
}

function getEGrassColor() {
  return process.env.EXPO_PUBLIC_GRASS_COLOR || 'undefined';
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Version: 3</Text>

      <Text style={{}}>The sky is {getSkyColor()}</Text>
      <Text style={{}}>The grass is {getGrassColor()}</Text>

      <Text style={{}}>The esky is {getESkyColor()}</Text>
      <Text style={{}}>The egrass is {getEGrassColor()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
