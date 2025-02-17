import React, { useState } from 'react'
import { View, TextInput, Button, FlatList, Text } from 'react-native'
import { useTodo } from '../context/TodoContext'

const BuscadorScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { todos } = useTodo()

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <View>
      <TextInput
        placeholder="Buscar tarea"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredTodos}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default BuscadorScreen