"use client"

import { useState, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orientation, setOrientation] = useState("portrait")
  const navigation = useNavigation()

  // Detect orientation changes
  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window")
      setOrientation(width > height ? "landscape" : "portrait")
    }

    // Set initial orientation
    updateOrientation()

    // Add event listener for orientation changes
    Dimensions.addEventListener("change", updateOrientation)

    // Clean up
    return () => {
      // Remove event listener (for older React Native versions)
      if (Dimensions.removeEventListener) {
        Dimensions.removeEventListener("change", updateOrientation)
      }
    }
  }, [])

  const validateEmail = () => {
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      console.log("Error: Please enter a valid email address")
      Alert.alert("Error", "Please enter a valid email address")
      return false
    }
    return true
  }

  const handleResetPassword = async () => {
    if (!validateEmail()) return
  
    setIsLoading(true)
  
    try {
      const response = await fetch("https://api.santiagohe75.workers.dev/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
  
      const message = await response.text()
      Alert.alert(response.ok ? "Success" : "Error", message)
    } catch (error) {
      Alert.alert("Network Error", error.message)
    } finally {
      setIsLoading(false)
    }
  }
  

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={orientation === "landscape" ? styles.landscapeScroll : styles.portraitScroll}>
        <View style={orientation === "landscape" ? styles.landscapeInner : styles.portraitInner}>
          {/* Logo Section */}
          <View style={orientation === "landscape" ? styles.landscapeLogoContainer : styles.portraitLogoContainer}>
            <Image
              source={require("../assets/edumon-logo-education.png")}
              style={orientation === "landscape" ? styles.landscapeLogo : styles.portraitLogo}
            />
            <Text style={styles.appTitle}>Reset Password</Text>
          </View>

          {/* Form Section */}
          <View style={orientation === "landscape" ? styles.landscapeFormContainer : styles.portraitFormContainer}>
            <Text style={styles.instructionText}>
              Enter your email address and we'll send you instructions to reset your password.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
            />

            <TouchableOpacity
              style={[styles.button, isLoading && styles.buttonDisabled]}
              onPress={handleResetPassword}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>{isLoading ? "Sending..." : "Reset Password"}</Text>
            </TouchableOpacity>

            <View style={styles.loginLinkContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginLink}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  // Portrait mode styles
  portraitScroll: {
    flexGrow: 1,
  },
  portraitInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  portraitLogoContainer: {
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  portraitLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  portraitFormContainer: {
    width: "100%",
    maxWidth: 400,
  },

  // Landscape mode styles
  landscapeScroll: {
    flexGrow: 1,
  },
  landscapeInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  landscapeLogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  landscapeLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  landscapeFormContainer: {
    flex: 1,
    maxWidth: 500,
  },

  // Common styles
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  instructionText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
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
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginLink: {
    color: "#4a90e2",
    fontSize: 16,
    fontWeight: "bold",
  },
})

