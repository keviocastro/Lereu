import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ActionButton.styles';

const ActionButton = ({ title, type, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, { backgroundColor: styles[type].backgroundColor }]}>
          <Text style={[styles.buttonText, { color: styles[type].color }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
}

export default ActionButton;