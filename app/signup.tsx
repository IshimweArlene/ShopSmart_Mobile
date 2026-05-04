import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function SignUpScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Navigate to the main tabs after "sign up"
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {/* Background Shapes */}
      <View style={styles.topBackground} />

      <View style={[styles.content, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        
        {/* Top Spacer */}
        <View style={styles.topSpacer} />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logoImage} 
            resizeMode="contain" 
          />
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="USERNAME"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Feather name="mail" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="EMAIL"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Feather name="key" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />

        {/* Login Navigation Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/')}>
          <Text style={styles.signUpText}>ALREADY HAVE AN ACCOUNT? LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4A5A', // Dark slate background
  },
  topBackground: {
    position: 'absolute',
    top: -width,
    left: -width * 0.5,
    width: width * 2,
    height: width * 2,
    backgroundColor: '#4DF3C6', // Mint green background
    transform: [{ rotate: '10deg' }],
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSpacer: {
    flex: 0.5, // Less spacer because more inputs
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    zIndex: 1,
  },
  logoImage: {
    width: 100, // Slightly smaller to fit inputs
    height: 100,
  },
  formContainer: {
    paddingHorizontal: 50,
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 20, // Less margin than login
    paddingBottom: 8,
    width: '100%',
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    height: 40,
    fontWeight: '600',
    paddingVertical: 0,
  },
  loginButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    flex: 1,
  },
  signUpButton: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  signUpText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
