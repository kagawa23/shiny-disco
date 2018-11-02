import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
    <Text>素材库</Text>
  </View>
);

export default Index;
