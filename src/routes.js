import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';

const Stack = createStackNavigator();
const bgHeaderColor = '#EE2121';
const txtHeaderColor = '#fff';

const Drawer = createDrawerNavigator();

function App() { 
  
    return (
      <NavigationContainer>       
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle:{
              backgroundColor: bgHeaderColor
            },
            headerTitleAlign: 'center',
            headerTintColor: txtHeaderColor,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen options={({navigation}) => ({
            title: 'Coffee Break'
          })} 
          name="Home" 
          component={Home} />
  
        </Stack.Navigator>

        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>

      </NavigationContainer>
    )
  }
  
  export default App