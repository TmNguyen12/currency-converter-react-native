import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
