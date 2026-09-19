import {Pressable,Button, StyleSheet, TextInput,Image, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={estilos.fundo}>
    <View  style={estilos.fundo}> 
      <Image 
      source={{ uri: 'https://cdn.creativefabrica.com/2025/04/26/Elegant-VM-serif-monogram-logo-Graphics-120717010-1-580x387.jpg' }}
      
      style={estilos.imagem}
      />
            <Text style={estilos.texto1}>Faça login</Text>
                
        <Text style={estilos.texto2} > Insira seu email</Text>

      <TextInput
      placeholder = 'Seu email'
      style={estilos.texto3}
      />

    <Text style={estilos.texto2} > Insira sua senha</Text>

      <TextInput
      placeholder = 'Sua senha'
      secureTextEntry = {true}
      style={estilos.texto3}
      />

      <Button 
      title='enviar'
      onPress={() => {alert("Login efetuado com sucesso")}}
      />
      <Pressable 
      onPress={() => {alert("carregando próxima tela aguarde")}}
      >
     <Text style={estilos.texto4}>Crie sua conta</Text>
      </Pressable>

      <Pressable 
      onPress={() => {alert("Lembre dela")}}
      >
     <Text style={estilos.texto4}>Esqueceu sua senha?</Text>
      </Pressable>

    </View>

      <View style={estilos.rodape}>
      <Text style={estilos.texto_rodape}>version 1.1.1 - by Fim de Semana</Text>
   
     </View>
    </View>
    );
}
const estilos = StyleSheet.create({
  fundo:{ flex:1, 
  backgroundColor: '#27402D'
  },
    imagem: {
        width:220,
        height: 120,
        alignSelf: 'center',
        marginTop:50,
    },
    texto1: {
       fontSize: 20, 
       marginTop: 1, 
       textAlign: 'center', 
       color:'white',
    },
    texto2: {
      color:'white',
     marginTop: 25
     },
     texto3: {
       borderRadius: 5, 
       borderWidth:1, 
       margin:10 ,
       padding:5, 
       backgroundColor:'white'
       },
       texto4:{color:'white',
       alignSelf: 'center',
       marginTop:15
       },
       rodape:{ 
         flex:0.05, 
         backgroundColor: '#3a6324'
         },
         texto_rodape :{ 
           fontSize: 15, 
           marginTop: 10, 
           textAlign: 'center', 
           color:'white'}
});
