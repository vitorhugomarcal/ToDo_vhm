import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Todos } from '../../components/Todos';
import uuid from 'react-native-uuid';
import { styles } from './styles';

import logoImg from '../../assets/logo.png';

interface todosProps {
  title: string,
  id: string,
  isCompleted: boolean,
}

const todosInitial: todosProps[] = [
  {
    title: 'Fazer o desafio de ReactNative do primeiro projeto!',
    id: uuid.v4().toString(),
    isCompleted: false,
  },
  {
    title: 'Finalizar primeiro projeto do ignite React Native',
    id: uuid.v4().toString(),
    isCompleted: true,
  }
]

export function Home() {
  const [tasks, setTasks] = useState<todosProps[]>(todosInitial)
  const [newTask, setNewTask] = useState<string>('')

  const tasksCount = tasks.length;
  const tasksCompletedCount = tasks.filter(
    tasks => tasks.isCompleted === true
  ).length

  function checkTask(id: string) {
    const taskIndex = tasks.findIndex(tasks => tasks.id === id)
    
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      const task = { ...updatedTasks[taskIndex] };
      task.isCompleted = !task.isCompleted;
      updatedTasks[taskIndex] = task;
      setTasks(sortTasks(updatedTasks));
    }  
  }

  function sortTasks(tasks: todosProps[]) {
    return tasks.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) return 1;
      if (!a.isCompleted && b.isCompleted) return -1;
      return 0;
    });
  }

  function handleTaskAdd() {
    const newToDo = {
      title: newTask,
      id: uuid.v4().toString(),
      isCompleted: false
    }

    const newToDoArray = [...tasks, newToDo]

    setTasks(sortTasks(newToDoArray))
    setNewTask('')
  }

  
  function handleTaskDelete(title: string, id: string) {
    Alert.alert('Remover', `Remover a tarefa ${title}`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(tasks => tasks.id !== id))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma tarefa'
          placeholderTextColor='#808080'
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View> 
      </View>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.buttonFilter}>
          <Text style={styles.filterText}>Criadas</Text>
          <View style={styles.counterBox}>
               <Text style={styles.counter}>{tasksCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFilter}>
          <Text style={styles.filterTextCompleted}>Concluídas</Text>
          <View style={styles.counterBox}>
            <Text style={styles.counter}>{tasksCompletedCount}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={ item => item.id }
        renderItem= {({ item }) => (
         <Todos 
          key={item.id}
          title={item.title}
          onRemove={() => handleTaskDelete(item.title, item.id)}
          onSelect={() => checkTask(item.id)}
          completed={item.isCompleted}
         /> 
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ () => (
          <View style={styles.listEmpty}>
            <MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#808080" />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text> 
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}

