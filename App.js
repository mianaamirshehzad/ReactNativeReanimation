
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import AccordionAnimation from './src/screens/AccordionAnimation';

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