//IMPORTES TRADICIONAIS
import React from 'react';
import {Text, View, Button} from 'react-native';

//IMPORTES DO NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//CRIA A PILHA DE NAVEGAÇÃO
const Pilha = createStackNavigator();

//CRIA UMA TELA, A TELA HOME (OBS: PODE SER COLOCADO EM UM ARQUIVO EM SEPARADO)
function TelaHome({navigation}){
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}} >
      <Text>tela home</Text>
      <Button title='ir para canal'onPress={()=>navigation.navigate('Canal')} />
    </View>
  )
}

//CRIA UMA TELA, A TELA CANAL (OBS: PODE SER COLOCADO EM UM ARQUIVO EM SEPARADO)
function TelaCanal({navigation}){
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}} >
      <Text>essa é a tela canal</Text>
    </View>
  )
}

export default function App() {
  return (
    //TODO O RETORNO FICA ENVOLVIDO DENTRO DE UM <NavigationContainer>, AO INVÉS DE UMA <View>
    <NavigationContainer>
      {/*AQUI VOCÊ CRIA UM NAVIGATOR COM O NOME DADO NO createStackNavigator() */}
      <Pilha.Navigator >
        {/*PROCESSO DE ADICIONAR UMA TELA E COLOCAR OPTIONS EM SEU HEADER*/}
        <Pilha.Screen name="Home" component={TelaHome} options={{title: 'tela inicial'}}/>
        {/*PROCESSO DE ADICIONAR UMA TELA E COLOCAR OPTIONS EM SEU HEADER*/}
        <Pilha.Screen name="Canal" component={TelaCanal} options={{title: 'canal'}}/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}