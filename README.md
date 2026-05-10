

https://github.com/user-attachments/assets/a335d238-085a-4274-9056-bc1f8cfd8972



# React Native Sign In Screen 📱

A polished, high-fidelity mobile authentication UI built with **React Native** and **Expo**. This project focuses on recreating a modern, professional design using only core components to maintain a lightweight and highly customizable codebase.

## 🎨 Design Inspiration
This interface is inspired by the **Osler AI Telehealth App** design on Dribbble.
[View Design on Dribbble](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI)

## 🚀 Features
- **App Logo Section**: Custom-built vector logo using core components.
- **Dynamic Sign In**: Clean layout with email and password fields.
- **Password Visibility**: Interactive toggle for showing/hiding passwords.
- **Social Authentication**: Squircle-styled buttons for Google, Facebook, and Instagram.
- **Navigation Flow**: Fully functional routing between Sign In, Sign Up, and Forgot Password screens using Expo Router.
- **Form States**: Interactive focus states and basic validation feedback.
- **Responsive Layout**: Designed to look great on various screen sizes.

## 🛠️ Tech Stack
- **Framework**: [React Native](https://reactnative.dev/)
- **Platform**: [Expo](https://expo.dev/) (SDK 55.0.0)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (Ionicons & FontAwesome)
- **Styling**: Standard `StyleSheet` (No UI libraries used)

## 📋 Requirements & Constraints
- **Core Components Only**: Built strictly using `View`, `Text`, `TextInput`, `TouchableOpacity`, etc.
- **No UI Libraries**: Zero dependency on libraries like React Native Paper, Elements, or NativeWind to demonstrate core layout mastery.
- **Accurate Recreation**: Focused on matching typography, spacing, and brand colors from the original Dribbble design.

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-native-sign-in-screen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Download the **Expo Go** app on iOS or Android.
   - Scan the QR code appearing in your terminal.

## 📸 Screen Structure
- `src/app/index.js`: Sign In Screen (Primary)
- `src/app/signup.js`: Registration Screen
- `src/app/forgot-password.js`: Password Recovery Selection
- `src/app/_layout.js`: Global navigation configuration

---
*Built as a technical assignment to demonstrate React Native UI/UX capabilities.*
