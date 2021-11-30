import React, { useState, useEffect } from 'react'
import { 
    View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';

const Notes = () => {

    const [NF, setNF] = useState<number>()
    const [firstParcial, setFirstParcial] = useState<string>('')
    const [secondParcial, setSecondParcial] = useState<string>('')

    //Arreglo de notas
    const [total, setTotal] = useState<string[]>([])

    const [text, setText] = useState<string>('')
    const [estudiante, setEstudiante] = useState<string[]>([])

    const handleAddStudents = () => {
        //alert('Agregando estudiante')
        const text2: string[] = [text]
        const allText: string[] = [...estudiante, ...text2]
        setEstudiante(allText)
        alert('Registro agregado Exitosamente')
    }
    const handleAddNotes = () => {
        const parcials = (parseFloat(firstParcial) + parseFloat(secondParcial))/2
        setNF(parcials)

        //Guardando en arreglo de notas
        const ArrTotal: string[] = [parcials.toString()]
        const allTotal: string[] = [...total, ...ArrTotal]
        setTotal(allTotal)
    }

    const handleExecute = () => {
        handleAddStudents()
        handleAddNotes()
    }

    //useEffect(() => {}, [firstParcial, setSecondParcial, NF])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.datosEntrada}>
                    <View style={styles.inputSection}>
                        <Text style={styles.appText}>Nombre del Estudiante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del Estudiante'
                            onChangeText={text => setText(text)}
                        />
                        <View style={styles.parciales}>
                            <View>
                                <Text style={styles.appText}>IP</Text>
                                <TextInput
                                    style={styles.inputPaciales}
                                    placeholder='IP'
                                    onChangeText={firstParcial => setFirstParcial(firstParcial)}
                                />
                            </View>
                            <View>
                                <Text style={styles.appText}>IIP</Text>
                                <TextInput
                                    style={styles.inputPaciales}
                                    placeholder='IIP'
                                    onChangeText={secondParcial => setSecondParcial(secondParcial)}
                                />
                            </View>
                            <View>
                                <Text style={styles.appText}>NF</Text>
                                <Text style={styles.inputPaciales}>{NF}</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleExecute()}
                                >
                                    <Text style={styles.appText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listaSection}>
                    {
                        estudiante.map((estudent, index) => (
                            <View style={styles.lista}>
                                <Text key={index} style={styles.appText}>{estudent}</Text>
                                <Text
                                    style={[
                                        total[index] < '60' ? styles.textReprobed : styles.textAprobado,
                                    ]}
                                >
                                    Nota final: {total[index]}
                                </Text>
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
    },
    datosEntrada: {},
    inputSection: {},
    input: {
        marginTop: 10,
        borderWidth: 2,
        paddingVertical: 18,
        paddingHorizontal: 130,
        paddingStart: 10,
        borderRadius: 6,
        borderColor: '#a9a9a9',
    },
    parciales: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputPaciales: {
        width: 40,
        borderWidth: 2,
        borderColor: '#a9a9a9',
        textAlign: 'center',
        paddingVertical: 15,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 26,
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
    },
    listaSection: {
        paddingHorizontal: 7,
        marginTop: 30,
        justifyContent: 'space-between',
        paddingVertical: 27,
        borderRadius: 6,
        borderColor: '#22B5A3'
    },
    lista: {
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#22B5A3',
        backgroundColor: '#f2f3f4',
        paddingVertical: 20,
        paddingHorizontal: 7,
        borderRadius: 7,
        alignItems: 'center',    
        justifyContent: 'space-evenly',    
        flexDirection: 'row',
    },
    textAprobado: {
        color: 'green',
    },
    textReprobed: {
        color: 'red',
    },
    appText: {
        color: '#05786A',
        fontSize: 23,
    },

})