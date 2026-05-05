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
    router.replace('/created');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      <View style={[styles.content, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View style={styles.topSpacer} />
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#fff"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Feather name="mail" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fff"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#fff" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />

        <TouchableOpacity style={styles.signUpButton} onPress={() => router.back()}>
          <Text style={styles.signUpText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#71727aff', // Dark slate background
    },
    topBackground: {
      position: 'absolute',
      top: -width, // Push it up so the bottom edge acts as the diagonal line
      left: -width * 0.5,
      width: width * 2,
      height: width * 1.55,
      backgroundColor: '#74f1ccff', // Mint green background
      transform: [{ rotate: '6.96deg' }],
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
    },
    topSpacer: {
      flex: 1,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50,
      zIndex: 1,
    },
    logoImage: {
      width: 100,
      height: 100,
      marginTop: 30,
    },
    formContainer: {
      paddingHorizontal: 50,
      width: '100%',
      alignItems: 'center',
      // Offset the extra inputs height to match the login screen's flex calculation exactly.
      // This ensures the logo stays in the exact same position as index.tsx.
      marginBottom: -71,
    },
    inputWrapper: {
    
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
      marginBottom: 12,
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
      marginBottom: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    forgotPasswordText: {
      color: '#fff',
      fontSize: 12,
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
      fontSize: 14,
      fontWeight: 'bold',
    },
  });