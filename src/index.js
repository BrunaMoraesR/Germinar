import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
import Acervo from './acervo';
import Contato from './contato';
import Menu from './menuLateral';
import Metas from './metas';
import NovaMeta from './novaMeta';
import Progresso from './progresso';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Acervo" component={Acervo} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Metas" component={Metas} />
        <Stack.Screen name="NovaMeta" component={NovaMeta} />
        <Stack.Screen name="Progresso" component={Progresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;