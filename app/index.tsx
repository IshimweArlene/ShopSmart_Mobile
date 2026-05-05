import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to the main tabs after "login"
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

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/signup')}>
          <Text style={styles.signUpText}>SIGN UP</Text>
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
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 30,
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
