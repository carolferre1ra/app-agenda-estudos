import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function ButtonPrimary({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.85}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    elevation: 2,
  },
  text: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
