import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Button, 
  SafeAreaView, 
  TextInput 
} from 'react-native';

export default function App() {
  const [names, setNames] = useState(['Sahar', 'Rexxar']);
  const [newName, setNewName] = useState('');

  const addName = () => {
    if (newName.trim() === '') return; 

    setNames([...names, newName]);
    setNewName(''); 
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.listContainer}>
        {names.map((name, index) => (
          <Text style={styles.nameText} key={index}>
            {name}
          </Text>
        ))}
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez Un Nom"
          value={newName}
          onChangeText={setNewName}
        />
        <View style={styles.buttonWrapper}>
          <Button 
            title="Ajouter Le Nom" 
            onPress={addName} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(77, 230, 248, 1)',
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  nameText: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonWrapper: {
    alignItems: 'center',
  }
});