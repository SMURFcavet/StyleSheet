import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    
    <View style={estilo.fundo}>
    <View  style={estilo.fundo}> 
      <Image 
      source={{ uri: 'https://cdn.creativefabrica.com/2025/04/26/Elegant-VM-serif-monogram-logo-Graphics-120717010-1-580x387.jpg' }}
      
      style={estilo.imagem}
      />
            <Text style={estilo.texto1}>Quem planta com amor colhe beleza e paz.</Text>
                <Text style={estilo.texto2}>Cada muda é uma promessa de um mundo melhor.</Text>
    
    <Image
        source={require("./mudinha.png")}
        style={estilo.imagemM}
    />

    </View>

      <View style={estilo.rodape}>
      <Text style={estilo.texto_rodape}>version 1.1.1 - by Fim de Semana</Text>
   
     </View>
    </View>
    );
}
const estilo = StyleSheet.create({
fundo:{
 flex:1, backgroundColor: '#27402D'
},
imagem:{
        width:220,
        height: 120,
        alignSelf: 'center',
        marginTop:160,
},
texto1:{ fontSize: 13,
 marginTop: 1, 
 textAlign: 'center', 
 color:'white'
 },
 texto2: { fontSize: 14, 
 marginTop: 1, 
 textAlign: 'center', 
 color:'white'
 },
imagemM:{
            width: 300,
            height: 300,
            marginTop: 60,
            alignSelf: 'flex-end'
        },
texto_rodape: { fontSize: 15, marginTop: 10, textAlign: 'center', color:'white'},
rodape:{ flex:0.05, backgroundColor: '#3a6324'}
});
