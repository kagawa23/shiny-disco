import React, { PureComponent } from 'react';

import {
  StyleSheet, View, Text, SafeAreaView,
} from 'react-native';
import { BACKGROUND_COLOR, HEADER_COLOR } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  header: {
    backgroundColor: 'white',
    height: 44,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: HEADER_COLOR,
  },
});

const wrapper = options => WrappedComponent => class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{options.title}</Text>
        </View>
        <WrappedComponent {...this.props} />
      </SafeAreaView>
    );
  }
};
export default wrapper;
