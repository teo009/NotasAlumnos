import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Notes from './src/components/Notes';

export default function App() {
  return (
    <View style={styles.fondo}>
      <View style={styles.container}>
        <Text style={styles.texto}>CALIFICACIONES</Text>
      </View>
      <Notes />
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  container: {
    marginTop: 40,
    paddingVertical: 40,
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',

  },
})