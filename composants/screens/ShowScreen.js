import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

const ShowScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetch(`http://139.59.189.145/api/show?name=${encodeURIComponent(query)}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <View>
      <TextInput
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={search}
        placeholder="Search for a show"
      />
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ShowDetails', { show: item })}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ShowScreen;