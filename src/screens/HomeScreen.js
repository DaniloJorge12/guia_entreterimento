import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native";

const FILMES = [
  {
    id: "1",
    title: "Grey's Anathomy",
    rating: "10",
    image: require("../../assets/capas/grey.png"),
    desc: "Grey é uma médica profissional, trabalha no Seatle Grace, junto com seus colegas.",
  },
  {
    id: "2",
    title: "Matrix",
    rating: "8.7",
    image: null,
    desc: "Um hacker descobre a verdadeira natureza de sua realidade e seu papel na guerra contra os controladores dela...",
  },
  {
    id: "3",
    title: "Homem-Aranha: Através do Aranhaverso",
    rating: "8.6",
    image: null,
    desc: "Miles Morales é catapultado através do multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregadas de proteger sua própria existência...",
  }
];

export default function HomeScreen({ navigation }) {
  const renderFilme = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detalhes", { filme: item })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardRating}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Destaques</Text>
      <FlatList
        data={FILMES}
        keyExtractor={(item) => item.id}
        renderItem={renderFilme}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 15 },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E50914",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    marginBottom: 15,
    overflow: "hidden",
    flexDirection: "row",
  },
  cardImage: { 
    width: 100, 
    height: 150 
  },
  cardContent: { 
    padding: 15, 
    justifyContent: "center", 
    flex: 1 
  },
  cardTitle: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  cardRating: { 
    color: "#FFD700", 
    marginTop: 5 
  },
});