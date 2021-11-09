import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const Turno = ({turno, deleteTurno}) => {

    const confirmDeleteTurno = id => {
        console.log('Deleted', id);
        deleteTurno(id);
    }

    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.textDate}>{ turno.item.dia }</Text>
            </View>
            <View>
                <Text style={styles.textDateTime}>{ turno.item.horario } - { turno.item.clase } - { turno.item.nivel }</Text>
            </View>
            <View>
                <Text style={styles.textTeacher}>Disponible: { turno.item.capacidad } - { turno.item.profesor }</Text>
            </View>
            <View>
                <TouchableHighlight onPress={ () => confirmDeleteTurno( turno.item.id ) } style={ styles.deleteButton }>
                    <Text style={styles.textDeleteButton}>
                        Eliminar &times;
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#CCC',
        borderBottomColor: '#333',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    textDate: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    textDateTime: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    textTeacher: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
});

export default Turno;