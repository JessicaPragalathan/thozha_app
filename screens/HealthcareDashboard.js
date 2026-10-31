import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HealthcareDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>thozha.</Text>
      <Text style={styles.welcome}>Welcome, Dr. Ritha Dev</Text>
      <Text style={styles.subtitle}>How is it going today?</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("PatientsScreen")}>  
        <Text style={styles.cardTitle}>Active number of Patients</Text>
        <Text style={styles.cardValue}>74</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate("AlertsScreen")}>  
          <Text style={styles.cardTitle}>Alerts</Text>
          <Text style={styles.cardValue}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallCard} onPress={() => navigation.navigate("AppointmentsScreen")}>  
          <Text style={styles.cardTitle}>Appointments</Text>
          <Text style={styles.cardValue}>12</Text>
        </TouchableOpacity>
      </View>

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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#D6E4FF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  smallCard: {
    flex: 1,
    backgroundColor: "#FCE8E6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default HealthcareDashboard;

// Dummy Screens
export const PatientsScreen = () => <View><Text>Patients Screen</Text></View>;
export const AlertsScreen = () => <View><Text>Alerts Screen</Text></View>;
export const AppointmentsScreen = () => <View><Text>Appointments Screen</Text></View>;
export const HomeScreen = () => <View><Text>Home Screen</Text></View>;
export const NotificationScreen = () => <View><Text>Notification Screen</Text></View>;
export const ProfileScreen = () => <View><Text>Profile Screen</Text></View>;
