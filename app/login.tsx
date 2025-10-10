import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/fundo4.jpeg')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.welcome}>Bem Vindo!</Text>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Por favor preencha suas informações</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#555"
              style={styles.input}
            />
            <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#555"
              secureTextEntry
              style={styles.input}
            />
            <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.registerButton]}
            onPress={() => router.push('/register')}
          >
            <Text style={styles.buttonText}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: '#2F66F6',
    borderRadius: 25,
    padding: 8,
    elevation: 5,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',

  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#F3F4F6',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2F66F6',
    borderRadius: 25,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  registerButton: {
    backgroundColor: '#2F66F6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});