
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Animation from './src/screens/Animation';

const App = () => {
  return (
    <View style = {styles.container} > 
      <Animation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;