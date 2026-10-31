import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HealthcareProviderScreen from "./screens/HealthcareProviderScreen";
import PatientCaregiverScreen from "./screens/PatientCaregiverScreen";
import PatientsScreen from "./screens/PatientsScreen";
import PatientDetailScreen from "./screens/PatientDetailScreen"; // ✅ Ensure this is correctly imported

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HealthcareProviderScreen" component={HealthcareProviderScreen} />
        <Stack.Screen name="PatientCaregiverScreen" component={PatientCaregiverScreen} />
        <Stack.Screen name="PatientsScreen" component={PatientsScreen} />
        <Stack.Screen name="PatientDetailScreen" component={PatientDetailScreen} /> {/* ✅ FIXED */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
