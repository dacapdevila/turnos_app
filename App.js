import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, Platform} from 'react-native';
import Turno from './components/Turno';

export default function App() {

  const [turnos, setTurnos] = useState([
    { id: 1, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "10:00", dia: "09/11/2021", capacidad: 5 },
    { id: 2, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "20:30", dia: "08/11/2021", capacidad: 5 },
    { id: 3, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "20:30", dia: "08/11/2021", capacidad: 5 }
  ]);

  const deleteTurno = id => {
    const updatedTurnos = turnos.filter( turno => turno.id !== id );
    setTurnos( updatedTurnos );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={turnos}
        renderItem={ ( turno ) => <Turno turno={turno} deleteTurno={deleteTurno} />
        }
        keyExtractor={ turno => turno.id }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 40,
  },
});
