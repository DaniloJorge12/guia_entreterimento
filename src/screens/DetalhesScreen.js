import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import conteudoLocal from "../data/conteudo.json";

export default function DetalhesScreen({ route, navigation }) {
  const { obj } = route.params;
  const [listaCompleta, setListaCompleta] = useState([]);

  useEffect(() => {
    fetch("https://api-filmes-vercel.vercel.app/api")
      .then((resposta) => resposta.json())
      .then((dados) => setListaCompleta(dados))
      .catch(() => setListaCompleta(conteudoLocal));
  }, []);

  const recomendados = useMemo(() => {
    if (!listaCompleta.length) {
      return [];
    }

    const semAtual = listaCompleta.filter((item) => item.id !== obj.id);
    const mesmaCategoria = semAtual.filter((item) => item.tipo === obj.tipo);
    const complemento = semAtual.filter((item) => item.tipo !== obj.tipo);

    return [...mesmaCategoria, ...complemento].slice(0, 6);
  }, [listaCompleta, obj.id, obj.tipo]);

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Image source={{ uri: obj.link_img }} style={styles.banner} />
      <View style={{ padding: 15 }}>
        <Text style={styles.txtBranco}>{obj.titulo}</Text>
        <Text style={styles.txtVermelho}>{obj.cat}</Text>
        <Text style={styles.sub}>Descrição</Text>
        <Text style={{ color: '#fff', marginTop: 10 }}>{obj.info}</Text>

        {recomendados.length > 0 && (
          <>
            <Text style={styles.sub}>Recomendados</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recomendadosLista}
            >
              {recomendados.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.cardRecomendado}
                  onPress={() => navigation.push("Detalhes", { obj: item })}
                >
                  <Image source={{ uri: item.link_img }} style={styles.imgRecomendada} />
                  <Text style={styles.tituloRecomendado} numberOfLines={2}>
                    {item.titulo}
                  </Text>
                  <Text style={styles.catRecomendado}>{item.cat}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: { 
    width: "100%", 
    height: 350 
  },
  txtBranco: { 
    color: "#fff", 
    fontSize: 70, 
    fontWeight: "bold" 
  },
  txtVermelho: { 
    color: "#af9d9d", 
    fontSize: 20, 
    marginTop: 5, 
    fontWeight: "bold"
  },
  sub: { 
    color: "#fff", 
    fontSize: 18, 
    marginTop: 15, 
    fontWeight: "bold" 
  },
  recomendadosLista: {
    paddingTop: 10,
    paddingBottom: 6,
    paddingRight: 10
  },
  cardRecomendado: {
    width: 150,
    marginRight: 12,
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    overflow: "hidden"
  },
  imgRecomendada: {
    width: "100%",
    height: 95
  },
  tituloRecomendado: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingTop: 8
  },
  catRecomendado: {
    color: "#af9d9d",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 8
  }
});