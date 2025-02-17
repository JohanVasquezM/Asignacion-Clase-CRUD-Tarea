import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './pantallas/pantallaHome'
import AddTodoScreen from './pantallas/pantallaAddTodo'
import BuscadorScreen from './pantallas/pantallaBuscador'
import { TodoProvider } from './context/TodoContext'
import { RootTabParamList } from './types'

const Tab = createBottomTabNavigator<RootTabParamList>()

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="AddTodo" component={AddTodoScreen} />
          <Tab.Screen name="Buscador" component={BuscadorScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TodoProvider>
  )
}

export default App