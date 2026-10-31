import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s get started!</Text>
      <Text style={styles.subtitle}>Stay mentally sound and healthy</Text>
      <Text style={styles.loginAs}>LOGIN AS</Text>

      <TouchableOpacity 
        style={styles.buttonPrimary} 
        onPress={() => navigation.navigate("HealthcareProvider")}
      >
        <Text style={styles.buttonTextPrimary}>Healthcare Provider</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonSecondary} 
        onPress={() => navigation.navigate("PatientCaregiver")}
      >
        <Text style={styles.buttonTextSecondary}>Patient Caregiver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 30,
  },
  loginAs: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: "#14146D",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonTextPrimary: {
    color: "white",
    fontSize: 16,
  },
  buttonSecondary: {
    borderWidth: 2,
    borderColor: "#14146D",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonTextSecondary: {
    color: "#14146D",
    fontSize: 16,
  },
});

export default LoginScreen;
