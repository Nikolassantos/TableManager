import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddCategory from "./Pages/AddCategory";
import AddProducts from './Pages/AddProducts'
import Home from "./Pages/Home";

const Stack = createStackNavigator();
const bgHeaderColor = "#EE2121";
const txtHeaderColor = "#fff";

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: bgHeaderColor
                    },
                    headerTitleAlign: "center",
                    headerTintColor: txtHeaderColor,
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            >
                <Stack.Screen
                    options={({ navigation }) => ({
                        title: "Coffee Break"
                    })}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={({ navigation }) => ({
                        title: "AddCategory",
                        headerShown: false
                    })}
                    name="AddCategory"
                    component={AddCategory}
                />
                <Stack.Screen
                    options={({ navigation }) => ({
                        title: "AddProducts",
                        headerShown: false
                    })}
                    name="AddProducts"
                    component={AddProducts}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
