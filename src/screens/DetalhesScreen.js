import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DetalhesScreen({ route }) {
  const { obj } = route.params;

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Image source={{ uri: obj.link_img }} style={styles.banner} />
      <View style={{ padding: 15 }}>
        <Text style={styles.txtBranco}>{obj.titulo}</Text>
        <Text style={styles.txtVermelho}>{obj.cat}</Text>
        <Text style={styles.sub}>Descrição</Text>
        <Text style={{ color: '#fff', marginTop: 10 }}>{obj.info}</Text>
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
    fontSize: 24, 
    fontWeight: "bold" 
  },
  txtVermelho: { 
    color: "red", 
    fontSize: 16 
  },
  sub: { 
    color: "#fff", 
    fontSize: 18, 
    marginTop: 15, 
    fontWeight: "bold" 
  }
});