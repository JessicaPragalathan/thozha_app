import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "react-native-image-picker";

const PatientDetailScreen = ({ route }) => {
  // Ensure safe access to patient data
  const patient = route.params?.patient || { name: "Unknown", age: "N/A", location: "Unknown" };
  
  const [imageUri, setImageUri] = useState(null);
  const [predictedOutput, setPredictedOutput] = useState("");

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        setPredictedOutput("Early signs of Alzheimer's detected."); // Simulated AI output
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Detail</Text>
      
      {/* Patient Info */}
      <View style={styles.patientInfo}>
        <View style={styles.profileIcon}>
          <MaterialIcons name="person" size={50} color="#1F2C77" />
        </View>
        <View>
          <Text style={styles.patientName}>{patient.name}</Text>
          <Text style={styles.patientAge}>Age: {patient.age}</Text>
          <Text style={styles.patientLocation}>📍 {patient.location}</Text>
        </View>
      </View>

      {/* MRI Upload */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleImagePick}>
        <Text style={styles.uploadText}>Upload MRI Scan</Text>
      </TouchableOpacity>

      {/* Display Uploaded Image */}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.uploadedImage} />}

      {/* Predicted Output */}
      {predictedOutput && (
        <View style={styles.predictionBox}>
          <Text style={styles.predictionText}>Prediction: {predictedOutput}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  patientInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  patientAge: {
    fontSize: 14,
    color: "gray",
  },
  patientLocation: {
    fontSize: 14,
    color: "gray",
  },
  uploadButton: {
    backgroundColor: "#1F2C77",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  uploadText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  uploadedImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  predictionBox: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  predictionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PatientDetailScreen;
