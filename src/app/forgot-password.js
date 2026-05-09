import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const PRIMARY_GREEN = '#82CD28';
const BACKGROUND_LIGHT = '#F8F9FA';
const TEXT_DARK = '#1A1A1A';
const TEXT_LIGHT = '#7C7C7C';
const INPUT_BG = '#FFFFFF';
const BORDER_COLOR = '#E5E7EB';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('email');

  const methods = [
    {
      id: 'email',
      title: 'Email Address',
      subtitle: 'Send via email address securely.',
      icon: 'mail-outline',
      type: 'ionicon',
    },
    {
      id: '2fa',
      title: '2 Factor Authentication',
      subtitle: 'Send via 2FA securely.',
      icon: 'cellphone-lock',
      type: 'material',
    },
    {
      id: 'google',
      title: 'Google Authenticator',
      subtitle: 'Send via authenticator securely.',
      icon: 'lock-outline',
      type: 'ionicon',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={TEXT_DARK} />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Select which methods you'd like to reset.</Text>
        </View>

        {/* Methods List */}
        <View style={styles.methodsContainer}>
          {methods.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodCard,
                selectedMethod === method.id ? styles.methodCardActive : null,
              ]}
              onPress={() => setSelectedMethod(method.id)}
            >
              <View style={[
                styles.iconContainer,
                selectedMethod === method.id ? styles.iconContainerActive : null
              ]}>
                {method.type === 'ionicon' ? (
                  <Ionicons name={method.icon} size={24} color={selectedMethod === method.id ? PRIMARY_GREEN : TEXT_LIGHT} />
                ) : (
                  <MaterialCommunityIcons name={method.icon} size={24} color={selectedMethod === method.id ? PRIMARY_GREEN : TEXT_LIGHT} />
                )}
              </View>
              <View style={styles.methodTextContainer}>
                <Text style={styles.methodTitle}>{method.title}</Text>
                <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Reset Button */}
        <TouchableOpacity style={styles.resetButton} activeOpacity={0.8}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFF" style={styles.arrowIcon} />
        </TouchableOpacity>
      </ScrollView>
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: TEXT_DARK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: TEXT_LIGHT,
  },
  methodsContainer: {
    gap: 16,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  methodCardActive: {
    borderColor: PRIMARY_GREEN,
    backgroundColor: '#F7FFF0',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconContainerActive: {
    backgroundColor: '#E7F6D8',
  },
  methodTextContainer: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_DARK,
    marginBottom: 4,
  },
  methodSubtitle: {
    fontSize: 13,
    color: TEXT_LIGHT,
  },
  resetButton: {
    backgroundColor: PRIMARY_GREEN,
    borderRadius: 25,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    shadowColor: PRIMARY_GREEN,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  resetButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
