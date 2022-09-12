import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const PrimaryButton = props => {
  const { children } = props;
  return (
    <View style={styles.viewContainer}>
      <Pressable style={styles.press} onPress={() => {}} android_ripple={{ color: '#640233' }}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: 'hidden',
    width: 100,
  },
  press: {
    backgroundColor: '#72063c',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
