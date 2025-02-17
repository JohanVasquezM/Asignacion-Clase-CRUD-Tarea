import React, { useState, useEffect } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native'
import { useTodo } from '../context/TodoContext'
import { RootTabParamList } from '../types'

type AddTodoScreenRouteProp = RouteProp<RootTabParamList, 'AddTodo'>
type AddTodoScreenNavigationProp = NavigationProp<RootTabParamList, 'AddTodo'>

const AddTodoScreen = () => {
  const [newTask, setNewTask] = useState('')
  const { addTodo, editTodo } = useTodo()
  const navigation = useNavigation<AddTodoScreenNavigationProp>()
  const route = useRoute<AddTodoScreenRouteProp>()

  useEffect(() => {
    if (route.params?.index !== undefined && route.params?.todo !== undefined) {
      setNewTask(route.params.todo)
    }
  }, [route.params]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      if (route.params?.index !== undefined) {
        editTodo(route.params.index, newTask);
      } else {
        addTodo(newTask)
      }
      setNewTask('')
      navigation.goBack()
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Escribe una tarea"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Agregar Tarea" onPress={handleAddTask} />
    </View>
  )
}

export default AddTodoScreen