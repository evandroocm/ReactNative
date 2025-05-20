import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, setText] = useState('');
  const [contador, setContador] = useState(0);
  const [tarefas, setTarefas] = useState([]);

  const handleAddTask = () => {
    if (text.trim() === '') return;
    setTarefas([...tarefas, text]); //nao sei pq ta vermelho, mas ta funcionando
    setContador(contador + 1);
    setText('');
  };

  const handleClearTarefas = () => {
    setTarefas([]);
    setContador(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Tarefas</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Digite uma tarefa..."
        value={text}
      />

      <View>
        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClearTarefas} style={styles.button}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.counterText}>Contador: {contador}</Text>

      <ScrollView style={styles.taskList} keyboardShouldPersistTaps="handled">
        {tarefas.map((tarefa, index) => (
          <Text key={index} style={styles.tarefaItem}>
            - {tarefa}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 96,
    backgroundColor: '#0f766e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerText: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: '#14b8a6',
  },
  buttonText: {
    color: '#eaeaea',
    fontSize: 16,
    fontWeight: '500',
  },
  counterText: {
    marginLeft: 12,
    fontSize: 16,
  },
  taskList: {
    marginTop: 16,
    marginHorizontal: 12,
    maxHeight: 200,
  },
  tarefaItem: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default TextInputExample;