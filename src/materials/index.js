import React, { PureComponent } from 'react';

import {
  StyleSheet, View, Text, SafeAreaView, TouchableOpacity,Image
} from 'react-native';
import wraper from '../common/indexWrapper';

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 211,
  },
});

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.banner} />
        </TouchableOpacity>
      </>
    );
  }
}

export default wraper({ title: '素材库' })(Index);
