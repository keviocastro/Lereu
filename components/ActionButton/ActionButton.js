import React from 'react';
import { View, Text } from 'react-native';
import styles from './ActionButton.styles';

const ActionButton = ({ title, type }) => {
    return (
      <View style={[styles.buttonContainer, { backgroundColor: styles[type].backgroundColor }]}>
        <Text style={[styles.buttonText, { color: styles[type].color }]}>{title}</Text>
      </View>
    );
}

export default ActionButton;