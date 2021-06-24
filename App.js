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

function openScreen({navigation}){
  navigation.navigate('Canal');
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

//-------------------- COMO FAZER FUNCIONAR UMA FLATLIST !!!! --------------------
// funtion App(){
//     const posts = [
//         {
//             id: '1',
//             author: 'mary.silva.585',
//             likes: '31',
//             description: 'Foram mais 365 dias da minha história e sinto uma enorme gratidão por cada um deles.',
//         }
//     ]


//     function renderItem({item: post}) {
//         return(
//             <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
//                 <Text>{post.author}</Text>
//                 <Text>{post.likes}</Text>
//                 <Text>{post.description}</Text>
//             </View>
//         );
//     }

//     return(
//         <View>
//             <FlatList 
//                 data={posts}
//                 keyExtractor= {(item) => {item.id}}
//                 renderItem={renderItem}
//             />
//         </View>
//     );
    
// }

// export default App;