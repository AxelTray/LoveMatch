import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MatchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heart}>💖</Text>
      <Text style={styles.text}>Vous avez matché aujourd’hui 🎉</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.btnText}>Démarrer le chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffe6eb" },
  heart: { fontSize: 80 },
  text: { fontSize: 20, marginVertical: 20, textAlign: "center" },
  button: { backgroundColor: "#ff4d6d", padding: 15, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "bold" }
