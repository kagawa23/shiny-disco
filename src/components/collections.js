import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';
import AppText from './text';
import Constants from '../common/constants';

const componentMargin = Constants.COLLECTION_MARGIN;

const styles = StyleSheet.create({
  editorChoice: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: componentMargin,
  },
  choiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
});

const Collection = ({ title, moreIndicator, mainContent }) => (
  <View style={styles.editorChoice}>
    <View style={styles.choiceHeader}>
      <AppText>
        <Text style={{ fontWeight: '600' }}>{title}</Text>
      </AppText>
      {moreIndicator}
    </View>
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {mainContent}
    </View>
  </View>
);

Collection.propTypes = {
  title: PropTypes.string.isRequired,
  moreIndicator: PropTypes.shape({}),
  mainContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Collection.defaultProps = {
  moreIndicator: null,
};

export default Collection;
