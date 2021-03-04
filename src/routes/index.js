import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'
import CourseDetails from '../screens/CourseDetails'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CourseDetail" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes