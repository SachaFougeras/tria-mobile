import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholder="Recherchez"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
  },
});

export default SearchBar;