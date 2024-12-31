import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.logoText}>MY APP</Text>
        <Text style={styles.welcomeText}>WELCOME</Text>
      </ImageBackground>
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={styles.formContentContainer}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 2,
    padding: 16,
    marginTop: -30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 16,
  },
  formContentContainer: {
    gap: 16,
    paddingBottom: 60,
  },
});
