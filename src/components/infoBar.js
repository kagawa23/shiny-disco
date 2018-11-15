import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import AppText from './text';
import Constants from '../common/constants';

const styles = StyleSheet.create({
  authorText: { fontSize: 12, color: Constants.SHADOW_COLOR },
  floorplan: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  authorAvatar: {
    height: 24,
    width: 24,
    borderRadius: 13,
    marginRight: 8,
  },
});

const InfoBar = ({
  title, avatar, name, rightButton: { text },
}) => (
  <View
    style={{
      backgroundColor: 'white',
      padding: 12,
      height: 84,
      position: 'relative',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <AppText>
      <Text style={{ fontWeight: '600' }}>{title}</Text>
    </AppText>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 24,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: avatar }} style={styles.authorAvatar} />
        <AppText>
          <Text style={styles.authorText}>{name}</Text>
        </AppText>
      </View>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            lineHeight: 24,
            height: 24,
          }}
        >
          <AppText>
            <Text style={styles.authorText}>{text}</Text>
          </AppText>
          <Icon name="down" size={14} color={Constants.SHADOW_COLOR} />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

InfoBar.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rightButton: PropTypes.shape({}).isRequired,
};
export default InfoBar;
