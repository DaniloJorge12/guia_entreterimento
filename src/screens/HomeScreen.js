import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Animated } from "react-native"; //Nosso grupo buscou como utilizar a biblioteca Animated
import { useAudioPlayer } from "expo-audio"; //Nosso grupo buscou como utilizar audio

export default function HomeScreen({ navigation }) {
  const [listaCompleta, setListaCompleta] = useState([]);

  const [animaFinalizada, setAnimaFinalizada] = useState(false);

  const opacidadePisco = useRef(new Animated.Value(0.3)).current;
  const posicaoY = useRef(new Animated.Value(0)).current;
  const opacidadeGeral = useRef(new Animated.Value(1)).current;
  const opacidadeHome = useRef(new Animated.Value(0)).current;

  const player = useAudioPlayer(require("../../assets/abertura.mp3"));

  useEffect(() => {
    fetch("https://api-filmes-vercel.vercel.app/api")
      .then((resposta) => resposta.json())
      .then((dados) => setListaCompleta(dados));
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacidadePisco, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(opacidadePisco, { toValue: 0.3, duration: 600, useNativeDriver: true })
      ]),
      { iterations: 2 }
    ).start(() => {
      
      Animated.timing(opacidadePisco, { toValue: 1, duration: 100, useNativeDriver: true }).start();
      
      Animated.timing(posicaoY, {
        toValue: -150,
        duration: 800,
        useNativeDriver: true
      }).start(() => {
        
        setTimeout(() => {
          Animated.timing(opacidadeGeral, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
          }).start(() => {
            
            setAnimaFinalizada(true);
            Animated.timing(opacidadeHome, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true
            }).start();

          });
        }, 800);
      });
    });
  }, []);

  useEffect(() => {
    player.play();
  }, []);

  const renderCabecalho = () => (
    <View style={styles.cabecalhoContainer}>
      <Image 
        source={require("../../assets/logo.png")} 
        style={styles.logo} 
      />
      <Text style={styles.tituloCategoria}>Títulos Recomendados</Text>
    </View>
  );

  if (!animaFinalizada) {
    return (
      <View style={styles.telaAbertura}>
        <Animated.View style={{ opacity: opacidadeGeral }}>
          <Animated.Image
            source={require("../../assets/logo.png")}
            style={[
              styles.logoAbertura,
              {
                opacity: opacidadePisco,
                transform: [{ translateY: posicaoY }]
              }
            ]}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.fundo, { opacity: opacidadeHome }]}>
      <FlatList
        data={listaCompleta}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderCabecalho}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.caixa}
            onPress={() => navigation.navigate("Detalhes", { obj: item })}
          >
            <Image source={{ uri: item.link_img }} style={styles.foto} />
            <View style={styles.textoLado}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.infoTexto} numberOfLines={2}>{item.info}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  telaAbertura: {
    flex: 1,
    backgroundColor: "#221633", 
    justifyContent: "center",
    alignItems: "center",
  },
  logoAbertura: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  fundo: {
    flex: 1,
    backgroundColor: "#221633",
    padding: 10,
  },
  cabecalhoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  logo: {
    width: 300,
    height: 260,
    resizeMode: "contain",
    marginBottom: 15,
  },
  tituloCategoria: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  caixa: {
    backgroundColor: "#2b2855",
    marginBottom: 12,
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
  },
  foto: {
    width: 90,
    height: 130,
  },
  textoLado: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  nome: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoTexto: {
    color: "#ccc",
    fontSize: 14,
  }
});
