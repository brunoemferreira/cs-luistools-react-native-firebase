import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/secure/HomeScreen";
import TopicScreen from "../../screens/secure/TopicScreen";
import TopicEditorScreen from "../../screens/secure/TopicEditorScreen";
import ContentScreeen from "../../screens/secure/ContentScreen";
import ContentEditorScreeen from "../../screens/secure/ContentEditorScreen";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      mode="modal"
      headerMode="screen">
      <Stack.Screen
        options={{
          title: 'Home'
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: 'Tópicos'
        }}
        name="TopicScreen"
        component={TopicScreen}
      />
      <Stack.Screen
        options={{
          title: 'Editor de Tópicos'
        }}
        name="TopicEditorScreen"
        component={TopicEditorScreen}
      />
      <Stack.Screen
        options={{
          title: 'Conteúdo'
        }}
        name="ContentScreeen"
        component={ContentScreeen}
      />
      <Stack.Screen
        options={{
          title: 'Editor de Conteúdo'
        }}
        name="ContentEditorScreeen"
        component={ContentEditorScreeen}
      />
    </Stack.Navigator>
  )
}

export default HomeStack;