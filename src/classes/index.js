import React from 'react';
// import { View } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Index = () => (
  <View style={styles.container}>
    <Text>3D学堂</Text>
  </View>
);

export default Index;
