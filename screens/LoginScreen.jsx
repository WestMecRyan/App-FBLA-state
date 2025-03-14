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
} from "react-native"
import { useNavigation } from "@react-navigation/native"

// Mock authentication function - replace with your actual auth logic
const authenticateUser = (email, password) => {
  return new Promise((resolve) => {
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, any non-empty email/password combination works
      resolve(email.length > 0 && password.length > 0)
    }, 1000)
  })
}

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password")
      return
    }

    setIsLoading(true)
    try {
      const success = await authenticateUser(email, password)
      if (success) {
        // Navigate to the main app
        navigation.replace("Home")
      } else {
        Alert.alert("Login Failed", "Invalid email or password")
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during login")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = () => {
    // Navigate to registration screen (to be implemented)
    Alert.alert("Register", "Registration functionality to be implemented")
  }

  const handleForgotPassword = () => {
    // Navigate to forgot password screen (to be implemented)
    Alert.alert("Forgot Password", "Password reset functionality to be implemented")
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.logoContainer}>
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.logo} />
            <Text style={styles.appTitle}>Game App</Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              onFocus={() => {
                /* Keyboard will automatically appear */
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => {
                /* Keyboard will automatically appear */
              }}
            />

            <TouchableOpacity
              style={[styles.button, isLoading && styles.buttonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>{isLoading ? "Logging in..." : "Login"}</Text>
            </TouchableOpacity>

            <View style={styles.linksContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.link}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4a90e2",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#a0c4e7",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  link: {
    color: "#4a90e2",
    fontSize: 14,
  },
})

