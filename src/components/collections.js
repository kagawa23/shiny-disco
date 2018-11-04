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
  },
});

const Collection = ({ title, moreIndicator, mainContent }) => (
  <View style={styles.editorChoice}>
    <View style={styles.choiceHeader}>
      <AppText>
        <Text style={{ fontWeight: '600' }}>{title}</Text>
      </AppText>
      {/* <View style={{ flexDirection: 'row' }}>
        <AppText>
          <Text style={{ color: MIDDLE_COLOR, fontSize: 12 }}>查看更多</Text>
        </AppText>
        <Icon name="right" style={{ marginLeft: 10 }} size={12} />
      </View> */}
      {moreIndicator || null}
    </View>
    <View>
      {/* {choices.map(choice => (
        <Card key={choice.id} data={choice} />
      ))} */}
      {mainContent || null}
    </View>
  </View>
);

export default Collection;
