import React, { useState } from 'react';
import {
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';

const FundoImage = require('../assets/fundo4.jpeg');

const RegisterScreen: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const handleRegister = (): void => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError('Por favor, digite seu e-mail.');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError('E-mail inválido.');
      return;
    } else {
      setEmailError('');
    }

    console.log('Tentativa de Registro', { email, password, firstName, lastName });
  };

  return (
    <ImageBackground
      source={FundoImage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Overlay>
            <Header>
              <BackButton onPress={() => router.back()}>
                <Feather name="arrow-left" size={22} color="#fff" />
              </BackButton>

              <Title>Registrar</Title>
              <Subtitle>Por favor preencha suas informações</Subtitle>
            </Header>

            <FormArea>
              <CustomInput
                label="Email"
                value={email}
                onChangeText={(text: string) => {
                  setEmail(text);
                  if (emailError) setEmailError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                rightIconName="mail"
                iconType="Feather"
                error={emailError}
              />

              <CustomInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                rightIconName="lock"
                iconType="Feather"
              />

              <CustomInput
                label="Primeiro Nome"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                rightIconName="user"
                iconType="Feather"
              />

              <CustomInput
                label="Segundo Nome"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                rightIconName="user"
                iconType="Feather"
              />
            </FormArea>

            <ContinueButton onPress={handleRegister}>
              <ButtonText>Continuar</ButtonText>
            </ContinueButton>
          </Overlay>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const Colors = {
  primary: '#2B6CB0',
  textDark: '#000000',
  textGray: '#555555',
  error: '#E53E3E',
};
const Overlay = styled.View`
  flex: 1;
  padding-bottom: 40px;
`;

const Header = styled.View`
  padding: 60px 30px 20px 30px;
`;

const BackButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  border-radius: 25px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: ${Colors.textDark};
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: ${Colors.textGray};
`;

const FormArea = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 10px;
`;

const ContinueButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  padding: 18px;
  border-radius: 14px;
  margin: 30px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
`;

export default RegisterScreen;
