import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MultiSelect from 'react-native-multiple-select';

const AddFrequency = () => {
    const [time, setTime] = useState('');
    const [days, setDays] = useState([]);
    const [pushNotification, setPushNotification] = useState(true);

    const route = useRoute();
    const itemName = route.params.itemName;
    const unit = route.params.unitName;
    const quantity = route.params.quantityValue;

    const navigation = useNavigation();

    const timeOptions = [
        { label: '12:00 AM', value: '12:00 AM' },
        { label: '12:30 AM', value: '12:30 AM' },
        { label: '1:00 AM', value: '1:00 AM' },
        { label: '1:30 AM', value: '1:30 AM' },
        { label: '2:00 AM', value: '2:00 AM' },
        { label: '2:30 AM', value: '2:30 AM' },
        { label: '3:00 AM', value: '3:00 AM' },
        { label: '3:30 AM', value: '3:30 AM' },
        { label: '4:00 AM', value: '4:00 AM' },
        { label: '4:30 AM', value: '4:30 AM' },
        { label: '5:00 AM', value: '5:00 AM' },
        { label: '5:30 AM', value: '5:30 AM' },
        { label: '6:00 AM', value: '6:00 AM' },
        { label: '6:30 AM', value: '6:30 AM' },
        { label: '7:00 AM', value: '7:00 AM' },
        { label: '7:30 AM', value: '7:30 AM' },
        { label: '8:00 AM', value: '8:00 AM' },
        { label: '8:30 AM', value: '8:30 AM' },
        { label: '9:00 AM', value: '9:00 AM' },
        { label: '9:30 AM', value: '9:30 AM' },
        { label: '10:00 AM', value: '10:00 AM' },
        { label: '10:30 AM', value: '10:30 AM' },
        { label: '11:00 AM', value: '11:00 AM' },
        { label: '11:30 AM', value: '11:30 AM' },
        { label: '12:00 PM', value: '12:00 PM' },
        { label: '12:30 PM', value: '12:30 PM' },
        { label: '1:00 PM', value: '1:00 PM' },
        { label: '1:30 PM', value: '1:30 PM' },
        { label: '2:00 PM', value: '2:00 PM' },
        { label: '2:30 PM', value: '2:30 PM' },
        { label: '3:00 PM', value: '3:00 PM' },
        { label: '3:30 PM', value: '3:30 PM' },
        { label: '4:00 PM', value: '4:00 PM' },
        { label: '4:30 PM', value: '4:30 PM' },
        { label: '5:00 PM', value: '5:00 PM' },
        { label: '5:30 PM', value: '5:30 PM' },
        { label: '6:00 PM', value: '6:00 PM' },
        { label: '6:30 PM', value: '6:30 PM' },
        { label: '7:00 PM', value: '7:00 PM' },
        { label: '7:30 PM', value: '7:30 PM' },
        { label: '8:00 PM', value: '8:00 PM' },
        { label: '8:30 PM', value: '8:30 PM' },
        { label: '9:00 PM', value: '9:00 PM' },
        { label: '9:30 PM', value: '9:30 PM' },
        { label: '10:00 PM', value: '10:00 PM' },
        { label: '10:30 PM', value: '10:30 PM' },
        { label: '11:00 PM', value: '11:00 PM' },
        { label: '11:30 PM', value: '11:30 PM' },
    ];

    const daysOptions = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' },
    ];

    const handleSave = () => {
        navigation.navigate('Manage Medications', { itemName: itemName, unit: unit, quanity: quantity, time: time, days: days, pushNotification: pushNotification });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.medicationName}>{itemName}</Text>
            <Text style={styles.label}>{quantity} {unit}</Text>
            <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Time:</Text>
                <Picker
                    style={styles.dropdown}
                    selectedValue={time}
                    onValueChange={(itemValue) => setTime(itemValue)}
                >
                    {timeOptions.map((option) => (
                        <Picker.Item key={option.label} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Days:</Text>
                <MultiSelect
                    hideTags
                    items={daysOptions}
                    uniqueKey="value"
                    onSelectedItemsChange={setDays}
                    selectedItems={days}
                    selectedItemTextStyle={styles.selectedItemTextStyle}
                    selectText="Select Days"
                    searchInputPlaceholderText="Search days..."
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="label"
                    searchInputStyle={styles.multiSelectInput}
                    style={styles.multiSelect}
                />
            </View>
            <View style={styles.checkboxContainer}>
                <View style={styles.checkboxTextContainer}>
                    <Text style={styles.checkboxLabel}>Would you like to receive push notifications?</Text>
                </View>
                <View style={styles.checkboxBoxContainer}>
                    <BouncyCheckbox
                        isChecked={pushNotification}
                        onPress={() => setPushNotification(!pushNotification)}
                        fillColor="#0080ff"
                        bounceEffect={0.7}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#eee',
    },
    medicationName: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 24,
        marginBottom: 5,
    },
    input: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0080ff',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkboxTextContainer: {
        flex: 1,
    },
    checkboxBoxContainer: {
        marginLeft: 10,
    },
    checkboxLabel: {
        fontSize: 18,
    },
    dropdown: {
        backgroundColor: '#fff',
    },
    dropdownContainer: {
        paddingVertical: 10
    },
    multiSelect: {
        backgroundColor: '#fff',
    },
    multiSelectInput: {
        backgroundColor: '#fff',
    },
    selectedItemTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default AddFrequency;
