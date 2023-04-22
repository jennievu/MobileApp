import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import medications from './medication-data.json';

class MyData extends Component {
  constructor(props) {
    super(props);

    const today = new Date();
    const dateString = today.toLocaleDateString();
    const dosesTaken = {};

    medications.medications.forEach(medication => {
      dosesTaken[medication.name] = medication.schedule.map(dose => ({
        time: dose.time,
        taken: false
      }));
    });

    this.state = {
      dateString,
      dosesTaken
    };
  }

  toggleDoseTaken = (medicationName, doseTime) => {
    const dosesTaken = { ...this.state.dosesTaken };
    const medicationDoses = dosesTaken[medicationName];
    const doseIndex = medicationDoses.findIndex(dose => dose.time === doseTime);

    medicationDoses[doseIndex].taken = !medicationDoses[doseIndex].taken;

    this.setState({ dosesTaken });
  };

  render() {
    const { dateString, dosesTaken } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.dateString}>Log of {dateString}'s doses:</Text>
          {medications.medications.map(medication => (
            <View key={medication.name} style={styles.medication}>
              <Text style={styles.medicationName}>{medication.name}</Text>
              <Text style={styles.medicationScheduleHeader}>Schedule:</Text>
              <View style={styles.medicationSchedule}>
                {medication.schedule.map(dose => (
                  <TouchableOpacity
                    key={dose.time}
                    style={[
                      styles.dose,
                      dosesTaken[medication.name].find(d => d.time === dose.time).taken && styles.doseTaken
                    ]}
                    onPress={() => this.toggleDoseTaken(medication.name, dose.time)}
                  >
                    <Text>{dose.time}: </Text>
                    <Text style={styles.doseQuantity}>
                      {dose.quantity} {dose.unit}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  scrollview: {
      marginHorizontal: 20,
      width: '80%',
      alignContent: 'center'
  },
  dateString: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  medication: {
    marginBottom: 20
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  medicationScheduleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  medicationSchedule: {
    marginLeft: 20
  },
  dose: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  doseTaken: {
    backgroundColor: '#c2f0c2'
  },
  doseQuantity: {
    fontWeight: 'bold'
  }
});

export default MyData;
