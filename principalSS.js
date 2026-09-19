import {SafeAreaView,StatusBar,View,Text,Image,TextInput,Pressable,ScrollView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilo.fundo}>

      <StatusBar style='white' />

      <View style={estilo.cabecalho}>
        <Image 
          source={{ uri: 'https://cdn.creativefabrica.com/2025/04/26/Elegant-VM-serif-monogram-logo-Graphics-120717010-1-580x387.jpg' }}
          style={estilo.imagem} 
        />
      </View>

      <ScrollView> 
        <View style={estilo.conteudo}> 

          <Image 
            source={require("./mudinha.png")} 
            style={estilo.mudinha} 
          /> 

          <Text style={estilo.texto1}> 
            Quem planta com amor colhe beleza e paz. 
          </Text> 

          <Text style={estilo.texto2}> 
            Mas, afinal, o que é um viveiro de mudas?
            O viveiro de mudas, também conhecido como berçário de mudas se trata de um local onde germinam e se desenvolvem as mais diversas espécies de plantas (nativas, frutíferas, hortaliças…) Nesses locais as mudas são cuidadas com muita atenção até adquirirem idade e tamanho suficiente para serem plantadas em áreas definitivas ou para serem transportadas até os supermercados para consumo. 
          </Text> 

          <Text style={estilo.texto3}> 
            Tem alguma dúvida sobre plantas? 
          </Text> 

          <TextInput 
            placeholder="Digite sua dúvida..." 
            style={estilo.input} 
          /> 

          <Pressable 
            onPress={() => {alert("Iremos responder você em alguns minutos")}}
            style={estilo.botao} 
          > 
            <Text style={estilo.texto4}> 
              Enviar 
            </Text> 
          </Pressable> 

        </View> 
      </ScrollView> 

      <View style={estilo.rodape}> 
        <Text style={estilo.texto_rodape}> 
          versão 1.1.2 - by Fim de Semana 
        </Text> 
      </View> 

    </SafeAreaView> 
  ); 
} 

const estilo = StyleSheet.create({ 

  fundo:{ 
    flex:1, 
    backgroundColor:'#27402D'
  },

  cabecalho:{
    alignItems:'center',
    padding:10
  },

  imagem:{
    width:220,
    height:120,
    alignSelf:'center',
    marginTop:5
  },

  conteudo:{
    alignItems:'center',
    padding:20
  },

  mudinha:{
    width:250,
    height:200,
    alignSelf:'flex-end'
  },

  texto1:{
    color:'white',
    fontSize:15,
    textAlign:'center',
    margin:15
  },

  texto2:{
    color:'white',
    textAlign:'center',
    marginBottom:20
  },

  texto3:{
    color:'white',
    marginBottom:8
  },

  input:{
    backgroundColor:'white',
    width:'90%',
    padding:10,
    borderRadius:5
  },

  botao:{
    backgroundColor:'#356b29',
    padding:12,
    margin:15,
    borderRadius:5
  },

  texto4:{
    color:'white'
  },

  rodape:{
    backgroundColor:'#356b29',
    padding:10,
    alignItems:'center'
  },

  texto_rodape:{
    fontSize:15,
    marginTop:10,
    textAlign:'center',
    color:'white'
  }

});
