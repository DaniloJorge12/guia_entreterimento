import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native";

export default function DetalhesScreen({ route }) {
  const { filme } = route.params || {
    filme: {
      title: "Selecione um filme",
      rating: "-",
      desc: "Nenhum filme selecionado na Home.",
      image: { uri: "https://via.placeholder.com/500x300" }, 
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={filme.image} style={styles.backdrop} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{filme.title}</Text>
        <Text style={styles.rating}>Nota: ⭐ {filme.rating}</Text>
        <Text style={styles.sinopseTitle}>Sinopse</Text>
        <Text style={styles.description}>{filme.desc}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Assistir Trailer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#121212"
  },
  backdrop: { 
    width: "100%", 
    height: 350
  },
  infoContainer: { 
    padding: 20 
  },
  title: { 
    color: "#fff", 
    fontSize: 28, 
    fontWeight: "bold"
  },
  rating: { 
    color: "#FFD700", 
    fontSize: 18, 
    marginVertical: 10
  },
  sinopseTitle: {
    color: "#E50914",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  description: { 
    color: "#ccc", 
    fontSize: 16, 
    lineHeight: 24, 
    marginTop: 5 
  },
  button: {
    backgroundColor: "#E50914",
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: "center",
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold"
  },
});