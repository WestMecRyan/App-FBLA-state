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
  Alert,
  ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function RegisterScreen() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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

  // Function to validate user input
  const validateForm = () => {
    if (!username.trim()) {
      console.log("Error: Please enter a username")
      Alert.alert("Error", "Please enter a username")
      return false
    }

    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      console.log("Error: Please enter a valid email address")
      Alert.alert("Error", "Please enter a valid email address")
      return false
    }

    if (password.length < 6) {
      console.log("Error: Password must be at least 6 characters")
      Alert.alert("Error", "Password must be at least 6 characters")
      return false
    }

    if (password !== confirmPassword) {
      console.log("Error: Passwords do not match")
      Alert.alert("Error", "Passwords do not match")
      return false
    }

    return true
  }

  // Function to handle user registration
  const handleRegister = async () => {
    if (!validateForm()) return

 
    setIsLoading(true)

    const url = "https://api.santiagohe75.workers.dev/register"
  

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })

   

      if (response.ok) {
        const message = await response.text()
        console.log(`Registration Successful: ${message || "Your account has been created. Please log in."}`)
        Alert.alert("Registration Successful", message || "Your account has been created. Please log in.", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ])
      } else {
        const errorMessage = await response.text()
        console.log(`Registration Failed: ${errorMessage || "Could not create account"}`)
        Alert.alert("Registration Failed", errorMessage || "Could not create account")
      }
    } catch (error) {
      console.log(`Network Error: ${error.message}`)
      Alert.alert("Network Error", `Error message: ${error.message}`)
      console.error("Registration Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <ScrollView contentContainerStyle={orientation === "landscape" ? styles.landscapeScroll : styles.portraitScroll}>
        <View style={orientation === "landscape" ? styles.landscapeInner : styles.portraitInner}>
          {/* Logo Section */}
          <View style={orientation === "landscape" ? styles.landscapeLogoContainer : styles.portraitLogoContainer}>
            <Image
              source={require("../assets/monsters/ignekko.png")}
              style={orientation === "landscape" ? styles.landscapeLogo : styles.portraitLogo}
            />
            <Text style={styles.appTitle}>Create Account</Text>
          </View>

          {/* Form Section */}
          <View style={orientation === "landscape" ? styles.landscapeFormContainer : styles.portraitFormContainer}>
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
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  // Portrait styles
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
    marginTop: 40,
  },
  portraitLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  portraitFormContainer: {
    width: "100%",
    maxWidth: 400,
  },

  // Landscape styles
  landscapeScroll: {
    flexGrow: 1,
  },
  landscapeInner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  landscapeLogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  landscapeLogo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginTop: -40,
  },
  landscapeFormContainer: {
    flex: 2,
    maxWidth: 500,
  },

  // Common styles
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 10,
    color: "#333",
    fontFamily: "pixel-font",
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
    marginBottom: 20,
  },
  loginText: {
    color: "#333",
    fontSize: 14,
  },
  loginLink: {
    color: "#4a90e2",
    fontSize: 14,
    fontWeight: "bold",
  },
})

