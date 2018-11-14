import React, { PureComponent } from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from '../common/constants';
import { get } from '../common/request';
import { api } from '../common/index';
import LoadingBar from './loadingBar';

const { BACKGROUND_COLOR } = Constants;

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
        {data ? (
          <WrappedComponent data={data} {...this.props} />
        ) : (
          <LoadingBar content="加载中" />
        )}
      </SafeAreaView>
    );
  }
};
export default wrapper;
