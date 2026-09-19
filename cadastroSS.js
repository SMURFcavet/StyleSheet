import {Pressable,Button, TextInput,Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    
    <View style={estilos.fundo}>
    <View  style={estilos.fundo}> 
      <Image 
      source={{ uri: 'https://cdn.creativefabrica.com/2025/04/26/Elegant-VM-serif-monogram-logo-Graphics-120717010-1-580x387.jpg' }}
      
      style={estilos.imagem}
      />
            <Text style={estilos.texto1}>Faça seu cadastro com a V.M.</Text>
          <Text style={estilos.texto2} > Insira seu nome completo</Text>

      <TextInput
      placeholder = 'Seu nome'
      style={estilos.texto3}
      />
                
        <Text style={estilos.texto2} > Insira seu email</Text>

      <TextInput
      placeholder = 'Seu email'
      style={estilos.texto3}
      />
       <Text style={estilos.texto2}  > Insira sua senha</Text>

      <TextInput
      placeholder = 'Sua senha'
      secureTextEntry = {true}
      style={estilos.texto3}
      />

    <Text style={estilos.texto2} > Comfirme sua senha</Text>

      <TextInput
      placeholder = 'Sua senha'
      secureTextEntry = {true}
      style={estilos.texto3}
      />

      <Button 
      title='enviar'
      onPress={() => {alert("Cadastro efetuado com sucesso. Obrigado por escolher a V.M.")}}
      />
      <Pressable 
      onPress={() => {alert("carregando próxima tela aguarde")}}
      >
     <Text style={estilos.texto4}>Faça login</Text>
      </Pressable>

    </View>

      <View style={estilos.rodape}>
      <Text style={estilos.texto_rodape}>version 1.1.1 - by Fim de Semana</Text>
   
     </View>
    </View>
    );
}
const estilos = StyleSheet.create({
fundo:{ flex:1, backgroundColor: '#27402D'},

imagem: {
        width:220,
        height: 120,
        alignSelf: 'center',
        marginTop:10,
      },

texto1:{ fontSize: 20, marginTop: 1, textAlign: 'center', color:'white'},

texto2:{color:'white', marginTop: 20},

texto3:{borderRadius: 5, borderWidth:1, margin:10 ,padding:5, backgroundColor:'white'},

texto4:{color:'white',alignSelf: 'center',marginTop:15},

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
