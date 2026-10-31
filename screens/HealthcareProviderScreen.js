import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HealthcareProviderScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HEALTHCARE PROVIDER</Text>
      <Text style={styles.subHeader}>Create account</Text>
      
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="johndoe@mail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Text style={styles.label}>Medical License Number</Text>
      <TextInput
        style={styles.input}
        placeholder="98765"
        keyboardType="numeric"
        value={licenseNumber}
        onChangeText={setLicenseNumber}
      />
      
      {/* Navigates to HealthcareDashboard on press */}
      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("HealthcareDashboard")}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.loginText}>Log in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2C77',
    marginTop: 40,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1FF',
    width: 300,
    height: 48,
    borderRadius: 8,
    marginTop: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5,
  },
  createAccountButton: {
    backgroundColor: '#1F2C77',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
  },
  loginText: {
    color: '#1F2C77',
    fontWeight: 'bold',
  },
});

export default HealthcareProviderScreen;
