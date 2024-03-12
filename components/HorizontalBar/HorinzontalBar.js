import React from 'react';
import { View } from 'react-native';
import styles from './HorizontalBar.styles';

const HorizontalBar = () => {
  return (
    <View style={styles.horizontalBarContainer}>
      <View style={styles.horizontalBar} />
    </View>
  );
};

export default HorizontalBar;