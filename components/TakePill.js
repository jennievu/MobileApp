import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TakePill = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedHours, setSelectedHours] = useState([]);

  const onTakePill = (hour) => {
    const updatedHours = [...selectedHours, hour];
    setSelectedHours(updatedHours);
  };

  const renderHour = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.hourButton}
        onPress={() => onTakePill(item)}
      >
        <Text style={styles.hourText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>Select a date to see available hours</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <FlatList
          data={Array.from(Array(24).keys()).map((h) => `${h}:00`)}
          renderItem={renderHour}
          keyExtractor={(item) => item}
          ListEmptyComponent={renderEmptyList}
        />
    </View>
      <TouchableOpacity
        style={[styles.takePillButton, {opacity: selectedHours.length > 0 ? 1 : 0.5}]}
        disabled={selectedHours.length === 0}
        onPress={() => {
          // Logic for taking the pill
        }}
      >
        <Icon name="pill" size={30} color="white" />
        <Text style={styles.buttonText}>Take Pill</Text>
      </TouchableOpacity>
    </View>
  );
};

const {height} = Dimensions.get('window');
const calendarContainerHeight = height * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    height: calendarContainerHeight,
    width: '100%',
    paddingHorizontal: 20,
  },
  hourButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  hourText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
    textAlign: 'center',
  },
  takePillButton: {
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TakePill;
