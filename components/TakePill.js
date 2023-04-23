import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TakePill = () => {
  const [markedDates, setMarkedDates] = useState({}); // currently unused
  const [selectedHours, setSelectedHours] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);
  const [takenHours, setTakenHours] = useState([]);
  const [lastTakenHours, setLastTakenHours] = useState([]);

  useEffect(() => {
    // Fetch data from database and create an array of all available hours
    const availableHoursArray = ['10:00', '14:00', '18:00']; // replace with data from database
    setAvailableHours(availableHoursArray);
  }, []);

  const onTakePill = (hour) => {
    const updatedHours = [...selectedHours, hour];
    setSelectedHours(updatedHours);
  };

  const renderHour = ({item}) => {
    const isAvailable = availableHours.includes(item);
    const isTaken = takenHours.includes(item);
    const isLastTaken = lastTakenHours.includes(item);
    const buttonStyle = isTaken ? styles.disabledHourButton : (isAvailable ? styles.hourButton : styles.disabledHourButton);
    const textStyle = isTaken ? styles.disabledHourText : (isAvailable ? styles.hourText : styles.disabledHourText);
    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => onTakePill(item)}
        disabled={!isAvailable || isTaken}
      >
        <Text style={textStyle}>{item}</Text>
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
  
  const onUndo = () => {
    const updatedTakenHours = [...lastTakenHours];
    const updatedSelectedHours = [...selectedHours];
    setTakenHours(prevTakenHours => {
      const filteredTakenHours = prevTakenHours.filter(hour => !lastTakenHours.includes(hour));
      setLastTakenHours([]);
      return filteredTakenHours;
    });
    setSelectedHours(prevSelectedHours => {
      const filteredSelectedHours = prevSelectedHours.filter(hour => !lastTakenHours.includes(hour));
      setLastTakenHours([]);
      return filteredSelectedHours;
    });
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

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.takePillButton, {opacity: selectedHours.length > 0 ? 1 : 0.5}]}
        disabled={selectedHours.length === 0}
        onPress={() => {
          // Show popup when pill is taken
          Alert.alert('Pill Taken!');
          // Add logic to update the database or perform any other actions
          const updatedTakenHours = [...takenHours, ...selectedHours];
          setLastTakenHours(selectedHours);
          setTakenHours(updatedTakenHours);
          setSelectedHours([]);
        }}
      >
        <Icon name="pill" size={30} color="white" />
        <Text style={styles.buttonText}>Take Pill</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.undoButton, {opacity: lastTakenHours.length > 0 ? 1 : 0.5}]}
        disabled={lastTakenHours.length === 0}
        onPress={onUndo}
      >
        <Text style={styles.buttonText}>Undo</Text>
      </TouchableOpacity>
    </View>
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
  disabledHourButton: {
    backgroundColor: '#9E9E9E',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledHourText: {
    color: '#616161',
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
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  undoButton: {
    backgroundColor: '#9E9E9E',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 120,
    marginTop: 30,
  },
});

export default TakePill;
