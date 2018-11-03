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
  header: {
    backgroundColor: 'white',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: DEEP_COLOR,
  },
});

const wrapper = () => WrappedComponent => class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log(BACKGROUND_COLOR);
  }

  async componentDidMount() {
    const { id } = this.props;
    const { success, data } = await get(`${api.host}${api[id]}`);
    if (success) {
      this.setState({ data });
    }
  }

  render() {
    const { title } = this.props;
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {data ? <WrappedComponent data={data} {...this.props} /> : null}
      </SafeAreaView>
    );
  }
};
export default wrapper;
