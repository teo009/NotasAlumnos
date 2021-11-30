import React, { useState } from 'react'
import { 
    View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

const Notes = () => {

    const [firstParcial, setFirstParcial] = useState<string>('')
    const [secondParcial, setSecondParcial] = useState<string>('')
    const [total, setTotal] = useState<string>()

    const [text, setText] = useState<string>('')
    const [estudiante, setEstudiante] = useState<string[]>([
        'Alumno de prueba 1',
        'Alumno de prueba 2',
    ])

    const handleAdd = () => {
        //alert('Agregando estudiante')
        const text2: string[] = [text]
        const allText: string[] = [...estudiante, ...text2]
        setEstudiante(allText)

        console.log(secondParcial)
        const parcials = (parseFloat(firstParcial) + parseFloat(secondParcial))
        setTotal(parcials.toString())
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.datosEntrada}>
                    <View style={styles.inputSection}>
                        <Text>Nombre del Estudiante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del Estudiante'
                            onChangeText={text => setText(text)}
                        />
                        <View style={styles.parciales}>
                            <View>
                                <Text>IP</Text>
                                <TextInput
                                    style={styles.inputPaciales}
                                    placeholder='IP'
                                    onChangeText={firstParcial => setFirstParcial(firstParcial)}
                                />
                            </View>
                            <View>
                                <Text>IIP</Text>
                                <TextInput
                                    style={styles.inputPaciales}
                                    placeholder='IIP'
                                    onChangeText={secondParcial => setSecondParcial(secondParcial)}
                                />
                            </View>
                            <View>
                                <Text>NF</Text>
                                <Text style={styles.inputPaciales}>{total}</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleAdd()}
                                >
                                    <Text>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listaSection}>
                    {
                        estudiante.map((estudent, index) => (
                            <View style={styles.lista}>
                                <Text key={index}>{estudent}</Text>
                                <Text>Nota final: {total}</Text>
                            </View>
                        ))
                    }
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
    inputPaciales: {
        width: 40,
        borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 15,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 17,
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
    },
    listaSection: {
        paddingHorizontal: 7,
        marginTop: 30,
        justifyContent: 'space-between',
        borderWidth: 2,
        paddingVertical: 27,
        borderRadius: 6,
        borderColor: '#22B5A3'
    },
    lista: {
        marginBottom: 20,
        marginHorizontal: 5,
        borderWidth: 1,
        backgroundColor: '#a1caf1',
        paddingVertical: 25,
        paddingHorizontal: 7,
        borderRadius: 7,
        alignItems: 'center',    
        justifyContent: 'space-between',    
        flexDirection: 'row',
    },
})