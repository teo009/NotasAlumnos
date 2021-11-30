import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Notes = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View><Text>Hello there</Text></View>
            </View>
        </ScrollView>
    )
}

export default Notes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})