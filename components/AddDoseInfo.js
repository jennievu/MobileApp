import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const AddDoseInfo = () => {
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('mg');

    const route = useRoute();
    const itemName = route.params.itemName;

    const navigation = useNavigation();

    const handleSave = () => {
        navigation.navigate('Add Frequency', { itemName: itemName, unitName: unit, quantityValue: quantity });
        // TODO: handle saving the dose information
    };

    return (
        <View style={styles.container}>
            <Text style={styles.medicationName}>{itemName}</Text>
            <Text style={styles.label}>Quantity:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={quantity}
                onChangeText={(text) => setQuantity(text)}
            />
            <Text style={styles.label}>Unit:</Text>
            <Picker
                style={styles.input}
                selectedValue={unit}
                onValueChange={(itemValue) => setUnit(itemValue)}
            >
                <Picker.Item label="Milligrams (mg)" value="mg" />
                <Picker.Item label="Micrograms (mcg)" value="mcg" />
                <Picker.Item label="Units (U)" value="U" />
                <Picker.Item label="International Units (IU)" value="IU" />
                <Picker.Item label="Grams (g)" value="g" />
                <Picker.Item label="Drops (gtt)" value="gtt" />
                <Picker.Item label="Tablets/capsules" value="tabs" />
                <Picker.Item label="Ounces (oz)" value="oz" />
                <Picker.Item label="Teaspoons (tsp)/tablespoons (tbsp)" value="tsp/tbsp" />
            </Picker>
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
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0080ff',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginBottom: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default AddDoseInfo;
