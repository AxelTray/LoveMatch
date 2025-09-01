import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crée ton profil</Text>
      <Text style={styles.subtitle}>Ajoute tes infos pour commencer à matcher</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Match")}
      >
        <Text style={styles.btnText}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff0f5" },
  title: { fontSize: 28, fontWeight: "bold", color: "#d6336c" },
  subtitle: { fontSize: 16, marginVertical: 20, textAlign: "center" },
  button: { backgroundColor: "#ff4d6d", padding: 15, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "bold" }
});