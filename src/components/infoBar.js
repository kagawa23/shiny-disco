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

class InfoBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  render() {
    const {
      title,
      avatar,
      name,
      rightButton: { text, expand: description },
      style,
    } = this.props;

    const { isExpand } = this.state;
    return (
      <>
        <View
          style={[
            {
              backgroundColor: 'white',
              padding: 12,
              height: 84,
              position: 'relative',
              top: 0,
              justifyContent: 'space-between',
            },
            style,
          ]}
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
            {avatar ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: avatar }} style={styles.authorAvatar} />
                <AppText>
                  <Text style={styles.authorText}>{name}</Text>
                </AppText>
              </View>
            ) : null}
            <TouchableOpacity onPress={() => this.setState({ isExpand: !isExpand })}>
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
        {isExpand ? (
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: Constants.COLLECTION_MARGIN,
              paddingBottom: Constants.COLLECTION_MARGIN,
            }}
          >
            <AppText>
              <Text>{description}</Text>
            </AppText>
          </View>
        ) : null}
      </>
    );
  }
}

InfoBar.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  rightButton: PropTypes.shape({}).isRequired,
};

export default InfoBar;
