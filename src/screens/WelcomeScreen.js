import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>❤️ LoveMatch</Text>
      <Text style={styles.subtitle}>Bienvenue sur LoveMatch</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.btnText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffe6eb" },
  logo: { fontSize: 32, fontWeight: "bold", color: "#d6336c" },
  subtitle: { fontSize: 18, marginVertical: 20 },
  button: { backgroundColor: "#ff4d6d", padding: 15, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "bold" }
});