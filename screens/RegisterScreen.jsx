"use client"

import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

// Replace with your actual API URL
const API_URL = "https://api.santiagohe75.workers.dev/register" // Use your local network IP

export default function RegisterScreen() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  // Function to validate user input
  const validateForm = () => {
    if (!username.trim()) {
      Alert.alert("Error", "Please enter a username")
      return false
    }

    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      Alert.alert("Error", "Please enter a valid email address")
      return false
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters")
      return false
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return false
    }

    return true
  }

  // Function to handle user registration
  const handleRegister = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })

      const result = await response.json()

      if (response.ok) {
        Alert.alert("Registration Successful", "Your account has been created. Please log in.", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ])
      } else {
        Alert.alert("Registration Failed", result.message || "Could not create account")
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during registration")
      console.error("Registration Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.inner}>
            <View style={styles.logoContainer}>
              <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.logo} />
              <Text style={styles.appTitle}>Create Account</Text>
            </View>

            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />

              <TouchableOpacity
                style={[styles.button, isLoading && styles.buttonDisabled]}
                onPress={handleRegister}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>{isLoading ? "Creating Account..." : "Sign Up"}</Text>
              </TouchableOpacity>

              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  scrollContainer: { flexGrow: 1 },
  inner: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  logoContainer: { alignItems: "center", marginBottom: 30, marginTop: 40 },
  logo: { width: 80, height: 80, resizeMode: "contain" },
  appTitle: { fontSize: 24, fontWeight: "bold", marginTop: 10, color: "#333" },
  formContainer: { width: "100%", maxWidth: 400 },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: { backgroundColor: "#4a90e2", borderRadius: 8, padding: 15, alignItems: "center", marginTop: 10 },
  buttonDisabled: { backgroundColor: "#a0c4e7" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  loginLinkContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20, marginBottom: 40 },
  loginText: { color: "#333", fontSize: 14 },
  loginLink: { color: "#4a90e2", fontSize: 14, fontWeight: "bold" },
})
