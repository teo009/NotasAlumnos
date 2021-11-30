import React from 'react'
import { 
    View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

const Notes = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.datosEntrada}>
                    <View style={styles.inputSection}>
                        <Text>Nombre del Estudiante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del Estudiante'
                        />
                        <View style={styles.parciales}>
                            <View>
                                <Text>IP</Text>
                                <TextInput
                                    style={{}}
                                    placeholder='IP'
                                />
                            </View>
                            <View>
                                <Text>IIP</Text>
                                <TextInput
                                    style={{}}
                                    placeholder='IIP'
                                />
                            </View>
                            <View>
                                <Text>NF</Text>
                                <TextInput
                                    style={{}}
                                    placeholder='NF'
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text>Agregar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.lista}>
                    <Text>Teodoro Obando</Text>
                    <Text>Nota Final: 72</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Notes

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1,
        //borderWidth: 1,
    },
    datosEntrada: {},
    inputSection: {},
    input: {
        marginTop: 10,
        borderWidth: 1,
        paddingVertical: 18,
        paddingHorizontal: 130,
        paddingStart: 10,
        borderRadius: 6,
    },
    parciales: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
    },
    lista: {
        paddingHorizontal: 7,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        paddingVertical: 27,
        borderRadius: 6,
        borderColor: '#22B5A3'
    },
})