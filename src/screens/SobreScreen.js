import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native";

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.proposta}>
        Este aplicativo foi criado por uma equipe excepcional, focada em trazer
        flexibilidade e facilidade, tornando a consulta de filmes e series mais
        rápida para usuários casuais.
      </Text>
      <Text style={styles.version}>Versão 1.8.1</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  logo: { 
    width: 300, 
    height: 200, 
    marginBottom: 20, 
    resizeMode: "contain" 
  },
  proposta: {
    fontSize: 16,
    color: "#fcfcfc",
    marginTop: 20,
    textAlign: "center",
    lineHeight: 24,
  },
  version: { 
    color: "#555", 
    marginTop: 40, 
    fontSize: 12 
  },
});
