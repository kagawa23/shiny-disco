import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
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
      {moreIndicator || null}
    </View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {mainContent || null}
    </View>
  </View>
);

export default Collection;
