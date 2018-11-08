import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  StyleSheet, View, Text, Dimensions, Image,
} from 'react-native';
import Constants from '../common/constants';
import AppText from './text';

const { SHALLOW_COLOR, SHADOW_COLOR } = Constants;
const { width: deviceWidth, height } = Dimensions.get('window');
const componentMargin = Constants.COLLECTION_MARGIN;
const styles = StyleSheet.create({
  choice: {
    marginBottom: componentMargin,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: SHADOW_COLOR,
    shadowOpacity: 0.71,
    shadowRadius: 2,
  },
  choiceImage: {
    width: deviceWidth - componentMargin * 2,
    height: ((deviceWidth - componentMargin * 2) / 16) * 9,
    resizeMode: 'cover',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  choiceInfo: {
    height: 70,
    padding: 12,
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'space-between',
  },
  choiceSocial: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  choiceSocialFonts: {
    color: SHADOW_COLOR,
    fontSize: 12,
  },
});

const Card = ({
  data: {
    image, decorationType, roomType, area, likes, comments,
  },
}) => (
  <View style={[styles.choice]}>
    <Image borderTopRightRadius={4} source={{ uri: image }} style={styles.choiceImage} />
    <View style={styles.choiceInfo}>
      <AppText>{`${decorationType} · ${roomType} · ${area}㎡ `}</AppText>
      <View style={styles.choiceSocial}>
        <Icon color={SHALLOW_COLOR} name="like1" style={{ marginHorizontal: 5 }} size={12} />
        <AppText>
          <Text style={styles.choiceSocialFonts}>{likes}</Text>
        </AppText>
        <Icon color={SHALLOW_COLOR} name="heart" style={{ marginHorizontal: 5 }} size={12} />
        <AppText>
          <Text style={styles.choiceSocialFonts}>{comments}</Text>
        </AppText>
      </View>
    </View>
  </View>
);

export default Card;
