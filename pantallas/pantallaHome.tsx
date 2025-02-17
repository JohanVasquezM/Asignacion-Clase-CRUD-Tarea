import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { useTodo } from '../context/TodoContext'
import { RootTabParamList } from '../types'

type HomeScreenNavigationProp = NavigationProp<RootTabParamList, 'Home'>

const HomeScreen = () => {
  const { todos, deleteTodo } = useTodo()
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handleEditTodo = (index: number, todo: string) => {
    navigation.navigate('AddTodo', { index, todo })
  }

  const handleDeleteTodo = (index: number) => {
    Alert.alert(
      'Eliminar Tarea',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => deleteTodo(index) },
      ]
    )
  }

  return (
    <View>
      <Text>Lista de Tareas</Text>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => handleEditTodo(index, item)}>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Agregar Tarea"
        onPress={() => navigation.navigate('AddTodo', {})}
      />
    </View>
  )
}

export default HomeScreen