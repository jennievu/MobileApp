import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TakePill = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedHours, setSelectedHours] = useState([]);
  const [availableHours, setAvailableHours] = useState([]);

  useEffect(() => {
    // Initialize all hours as available
    const allHoursArray = Array.from(Array(24).keys()).map((h) => `${h}:00`);
    setAvailableHours(allHoursArray);
  }, []);

  const onTakePill = (hour) => {
    // Remove the selected hour from available hours and add it to selected hours
    const availableHoursCopy = [...availableHours];
    const index = availableHoursCopy.indexOf(hour);
    if (index > -1) {
      availableHoursCopy.splice(index, 1);
      setSelectedHours([...selectedHours, hour]);
      setAvailableHours(availableHoursCopy);
    }
  };

  const onUnlog = (hour) => {
    // Remove the hour from selected hours and add it back to available hours
    const selectedHoursCopy = [...selectedHours];
    const index = selectedHoursCopy.indexOf(hour);
    if (index > -1) {
      selectedHoursCopy.splice(index, 1);
      setSelectedHours(selectedHoursCopy);
      setAvailableHours([...availableHours, hour]);
    }
  };

  const renderHour = ({item}) => {
    const isAvailable = availableHours.includes(item);
    const buttonStyle = isAvailable ? styles.hourButton : styles.disabledHourButton;
    const textStyle = isAvailable ? styles.hourText : styles.disabledHourText;
    const isTaken = selectedHours.includes(item);
    const takenButtonStyle = isTaken ? styles.takenHourButton : null;
    const takenTextStyle = isTaken ? styles.takenHourText : null;
    const onPressAction = isTaken ? () => onUnlog(item) : () => onTakePill(item);
    return (
      <TouchableOpacity
        style={[buttonStyle, takenButtonStyle]}
        onPress={onPressAction}
        disabled={!isAvailable}
      >
        <Text style={[textStyle, takenTextStyle]}>{item}</Text>
        {isTaken && (
          <TouchableOpacity
            style={styles.unlogButton}
            onPress={() => onUnlog(item)}
          >
            <Text style={styles.unlogButtonText}>Unlog</Text>
          </TouchableOpacity>
        )}
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
        style={[styles.takePillButton, { opacity: selectedHours.length > 0 ? 1 : 0.5 }]}
        disabled={selectedHours.length === 0}
        onPress={() => {
          // Show popup when pill is taken
          Alert.alert('Pill Taken!');
          // Add logic to update the database or perform any other actions
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
    marginTop: 30,
  },
  unlogButton: {
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
