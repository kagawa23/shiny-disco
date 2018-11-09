import React, { PureComponent } from 'react';

import {
  StyleSheet, View, Text, SafeAreaView,
} from 'react-native';
import Constants from '../common/constants';
import { get } from '../common/request';
import { api } from '../common/index';

const { BACKGROUND_COLOR, DEEP_COLOR } = Constants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});

const wrapper = options => WrappedComponent => class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    const { id } = options;
    const { success, data } = await get(`${api.host}${api[id]}`);
    if (success) {
      this.setState({ data });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {data ? <WrappedComponent data={data} {...this.props} /> : null}
      </SafeAreaView>
    );
  }
};
export default wrapper;
