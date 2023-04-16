
import medications from './medication-data.json';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native';

class ManageMedications extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    {medications.medications.map(medication => (
                        <View key={medication.name} style={styles.medication}>
                            <Text style={styles.medicationName}>{medication.name}</Text>
                            <View style={styles.medicationSchedule}>
                                {medication.schedule.map(dose => (
                                    <Text key={dose.time} style={styles.dose}>
                                        {dose.time}: {dose.quantity} {dose.unit}
                                    </Text>
                                ))}
                            </View>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Text style={styles.deleteButtonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add Medication</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    scrollview: {
        marginHorizontal: 20,
        width: '80%',
        alignContent: 'center'
    },
    medication: {
        marginBottom: 20
    },
    medicationName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    medicationSchedule: {
        marginLeft: 20
    },
    dose: {
        fontSize: 14,
        marginBottom: 2
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    deleteButton: {
        backgroundColor: '#00000000'
    },
    deleteButtonText: {
        color: '#5A5A5A',
        textDecorationLine: 'underline'
    }
});

export default ManageMedications;