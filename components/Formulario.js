import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({ turnos, setTurnos }) => {
    const [profesor, setProfesor] = useState('');
    const [clase, setClase] = useState('');
    const [nivel, setNivel] = useState('');
    const [horario, setHorario] = useState('');
    const [dia, setDia] = useState('');
    const [capacidad, setCapacidad] = useState('');

    const [isDatePickerVisible, setdatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setdatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setdatePickerVisibility(false);
    }

    const confirmDate = date => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
        storeDate(date.toLocaleDateString('es-ES', options));
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmDateTime = dateTime => {
        const options = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false
        }
        storeDateTime(dateTime.toLocaleString('es-ES', options));
        hideTimePicker();
    }

    const showAlertWithErrors = () => {
        Alert.alert(
            'Error',
            'Completa todos los campos',
            [{
                text: 'Ok'
            }]
        )
    }

    const storeTurno = () => {
        if (
            profesor.trim() === '' ||
            clase.trim() === '' ||
            nivel.trim() === '' ||
            horario.trim() === '' ||
            dia.trim() === '' ||
            capacidad.trim() === ''
        ) {
            showAlertWithErrors();
            return;
        }

        const turno = { profesor, clase, nivel, horario, dia, capacidad }

        turno.id = shortid.generate();
        const updatedTurnos = [...turnos, turno];
        setTurnos(updatedTurnos);

        //

        setProfesor('');
        setClase('');
        setNivel('');
        setHorario('');
        setDia('');
        setCapacidad('');
    }

    return (
        <>
            <ScrollView>

                <View>
                    <Text>
                        Profesor:
                    </Text>
                    <TextInput
                        onChangeText={ text => setProfesor( text ) }
                    />
                </View>

                <View>
                    <Text>
                        Clase:
                    </Text>
                    <TextInput
                        onChangeText={ text => setClase( text ) }
                    />
                </View>

                <View>
                    <Text>
                        Nivel:
                    </Text>
                    <TextInput
                        onChangeText={ text => setNivel( text ) }
                    />
                </View>

                <View>
                    <Text>
                        Día:
                    </Text>
                    <Button
                        title={'Elegí el día'}
                        onPress={showDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={confirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elegí el día'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{dia}</Text>
                </View>

                <View>
                    <Text>
                        Hora:
                    </Text>
                    <Button
                        title='Elegí la hora'
                        onPress={showTimePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode='time'
                        onConfirm={confirmDateTime}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elegí la hora'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{horario}</Text>
                </View>

                <View>
                    <Text>
                        Capacidad:
                    </Text>
                    <TextInput
                        onChange={ text => setCapacidad( text ) }
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={ () => storeTurno() }>
                        <Text>
                            Crear nuevo turno
                        </Text>
                    </TouchableHighlight>
                </View>

            </ScrollView>
        </>
    )

}

export default Formulario;