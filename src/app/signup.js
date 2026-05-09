import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';

const PRIMARY_GREEN = '#82CD28';
const BACKGROUND_LIGHT = '#F8F9FA';
const TEXT_DARK = '#1A1A1A';
const TEXT_LIGHT = '#7C7C7C';
const INPUT_BG = '#FFFFFF';
const BORDER_COLOR = '#E5E7EB';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <View style={[styles.logoPart, styles.logoPartV]} />
              <View style={[styles.logoPart, styles.logoPartH]} />
            </View>
          </View>

          {/* Header Section */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Sign Up For Free</Text>
            <Text style={styles.subtitle}>Sign up in 1 minute for free!</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Email Address</Text>
            <View style={[styles.inputContainer, (isEmailFocused || email) ? styles.inputActive : null]}>
              <Ionicons name="mail-outline" size={20} color={(isEmailFocused || email) ? PRIMARY_GREEN : TEXT_LIGHT} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email..."
                placeholderTextColor={TEXT_LIGHT}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputContainer, (isPasswordFocused || password) ? styles.inputActive : null]}>
              <Ionicons name="lock-closed-outline" size={20} color={(isPasswordFocused || password) ? PRIMARY_GREEN : TEXT_LIGHT} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="************************"
                placeholderTextColor={TEXT_LIGHT}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={TEXT_LIGHT}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Password Confirmation</Text>
            <View style={[styles.inputContainer, (isConfirmFocused || confirmPassword) ? styles.inputActive : null]}>
              <Ionicons name="lock-closed-outline" size={20} color={(isConfirmFocused || confirmPassword) ? PRIMARY_GREEN : TEXT_LIGHT} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="************************"
                placeholderTextColor={TEXT_LIGHT}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() => setIsConfirmFocused(true)}
                onBlur={() => setIsConfirmFocused(false)}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={TEXT_LIGHT}
                />
              </TouchableOpacity>
            </View>

            {/* Error Message Example from Image */}
            {password !== confirmPassword && confirmPassword.length > 0 && (
              <View style={styles.errorContainer}>
                <Ionicons name="alert-circle" size={16} color="#FF4D4D" />
                <Text style={styles.errorText}> ERROR: Password do not match!</Text>
              </View>
            )}

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" style={styles.arrowIcon} />
            </TouchableOpacity>

            {/* Footer Links */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account? <Link href="/" style={styles.linkText}>Sign In.</Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_LIGHT,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPart: {
    position: 'absolute',
    backgroundColor: PRIMARY_GREEN,
    borderRadius: 8,
  },
  logoPartV: {
    width: 14,
    height: 36,
  },
  logoPartH: {
    width: 36,
    height: 14,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: TEXT_DARK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: TEXT_LIGHT,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_DARK,
    marginBottom: 10,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: INPUT_BG,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingHorizontal: 15,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  inputActive: {
    borderColor: PRIMARY_GREEN,
    borderWidth: 1.5,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: TEXT_DARK,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEBEB',
    padding: 12,
    borderRadius: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#FFB8B8',
  },
  errorText: {
    color: '#FF4D4D',
    fontSize: 14,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: PRIMARY_GREEN,
    borderRadius: 25,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    shadowColor: PRIMARY_GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    color: TEXT_LIGHT,
    fontSize: 14,
  },
  linkText: {
    color: PRIMARY_GREEN,
    fontWeight: 'bold',
  },
});
