import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Platform, Keyboard} from 'react-native'
import Turno from './components/Turno';
import Formulario from './components/Formulario';

export default function App() {

  const [turnos, setTurnos] = useState([
    { id: 1, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "10:00", dia: "09/11/2021", capacidad: 5 },
    { id: 2, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "20:30", dia: "08/11/2021", capacidad: 5 },
    { id: 3, profesor: "Dario Capdevila", clase: "Desarrollo Web", nivel: 'nivel 1', horario: "20:30", dia: "08/11/2021", capacidad: 5 }
  ]);

  // const [turnos, setTurnos] = useState([]);
  const [showFormulario, setShowFormulario] = useState(false);

  const deleteTurno = id => {
    const updatedTurnos = turnos.filter( turno => turno.id !== id );
    setTurnos( updatedTurnos );
  }

  const showForm = () => {
      setShowFormulario(!showFormulario);
  }

  const hideKeyword = () => {
    Keyboard.dismiss();
  }

  return (
      <TouchableWithoutFeedback onPress={ () => hideKeyword() }>
          <View style={styles.container}>
              <Text>Bienvenido administrador</Text>
              <View>
                  <TouchableHighlight onPress={ () => showForm() }>
                      <Text>Crear nuevo turno</Text>
                  </TouchableHighlight>
              </View>
              <View>
                  {
                      showFormulario ? (
                          <>
                            <Text>Crear nuevo turno</Text>
                              <Formulario turnos={turnos} setTurnos={setTurnos}/>
                          </>
                      ) : (
                        <>
                            <Text>Turnos disponibles</Text>
                            <FlatList
                                data={turnos}
                                renderItem={ ( turno ) => <Turno turno={turno} deleteTurno={deleteTurno} />
                                }
                                keyExtractor={ turno => turno.id }
                            />
                        </>
                      )
                  }
              </View>
          </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 80 : 60,
    },
});