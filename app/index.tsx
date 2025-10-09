import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/fundo4.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo a{'\n'}Agenda Estudos</Text>
        <Text style={styles.subtitle}>Vamos começar aqui!</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>COMEÇAR</Text>
        </TouchableOpacity>

        <View style={styles.illustrations}>
          <Image source={require('../assets/item1.png')} style={styles.image1} />
          <Image source={require('../assets/item2.png')} style={styles.image2} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2F66F6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  illustrations: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  image1: {
    width: 80,
    height: 80,
  },
  image2: {
    width: 80,
    height: 80,
  },
});
