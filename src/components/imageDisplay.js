import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import AppText from './text';
import Constants from '../common/constants';

export const SingleImage = (props) => {
  const { aspectRatio, imageUrl, title } = props;
  const height = 100 * aspectRatio;
  return (
    <>
      <View>
        <AppText>{title}</AppText>
      </View>
      <View style={{ marginTop: 20 }}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', paddingBottom: `${height}%`, resizeMode: 'cover' }}
        />
      </View>
    </>
  );
};
SingleImage.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// export const SingleImage = (props) => {
//     const { aspectRatio, imageUrl, title } = props;
//     const height = 100 * aspectRatio;
//     return (
//       <>
//         <View>
//           <AppText>{title}</AppText>
//         </View>
//         <View style={{ marginTop: 20 }}>
//           <Image
//             source={{ uri: imageUrl }}
//             style={{ width: '100%', paddingBottom: `${height}%`, resizeMode: 'cover' }}
//           />
//         </View>
//       </>
//     );
//   };
//   SingleImage.propTypes = {
//     aspectRatio: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   };

// export default ImageDisplay;
