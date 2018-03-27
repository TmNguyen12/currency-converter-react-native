import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

const InputWithButton = ({ onPress, buttonText, editable }) => (
  <View style={styles.border}>
    <TouchableHighlight onPress={onPress} style={styles.buttonContainer}>
      <Text>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput />
  </View>
);

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
