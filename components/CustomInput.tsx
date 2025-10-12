import React from 'react';
import { TextInputProps, View } from 'react-native';
import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
  label: string;
  rightIconName?: string;
  iconType?: 'Feather' | 'MaterialCommunityIcons';
  error?: string; 
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  rightIconName,
  iconType = 'Feather',
  error,
  ...rest
}) => {
  const IconComponent = iconType === 'MaterialCommunityIcons' ? MaterialCommunityIcons : Feather;

  return (
    <View style={{ width: '100%' }}>
      <InputWrapper hasError={!!error}>
        <StyledTextInput
          placeholder={label}
          placeholderTextColor="#888"
          {...rest}
        />
        {rightIconName && (
            <IconComponent name={rightIconName as any} size={20} color="#666" />
        )}
      </InputWrapper>

      {error ? <ErrorText>{error}</ErrorText> : null}
    </View>
  );
};

const InputWrapper = styled.View<{ hasError: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 14px;
  padding: 14px 18px;
  border-width: 1.2px;
  border-color: ${({ hasError }) => (hasError ? '#E53E3E' : '#dcdcdc')};
  margin-bottom: 15px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 15.5px;
  color: #000;
  padding-right: 10px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  color: #E53E3E;
  font-size: 13px;
  margin-left: 6px;
  margin-bottom: 8px;
`;

export default CustomInput;
