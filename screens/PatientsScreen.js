import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const patients = [
  { id: "1", name: "Ruchita Singh", date: "Jul 10, 2024" },
  { id: "2", name: "Karan Grover", date: "Jul 5, 2024" },
  { id: "3", name: "Nirmal Pillai", date: "Jun 24, 2024" },
  { id: "4", name: "Abhishek Raj", date: "Jun 15, 2024" },
  { id: "5", name: "Ramamoorthy P", date: "Jun 2, 2024" },
  { id: "6", name: "Sundar Subramaniam", date: "May 28, 2024" },
  { id: "7", name: "Krishnan J", date: "May 18, 2024" },
];

const PatientsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Overview</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.patientCard}
            onPress={() => {
              if (item.name === "Abhishek Raj") {
                navigation.navigate("PatientDetailScreen", { patient: item });
              } else {
                alert("Patient details not available yet."); // You can customize this behavior
              }
            }}
          >
          
            <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
            <View>
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PatientsScreen")}>
          <Text style={styles.navText}>Patients</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  patientCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  patientDate: {
    fontSize: 14,
    color: "gray",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    marginTop: 20,
  },
  navText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PatientsScreen;
