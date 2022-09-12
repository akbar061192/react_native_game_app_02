import { StyleSheet, TextInput, Button, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const GameStart = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} />
      <View style={styles.btnContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default GameStart;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    color: '#ddb52f',
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
