import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleSignUp = () => {
        if (validateEmail(email)) {
            navigation.navigate('Sign Up', { email: email });
        } else {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Please enter your email address:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.button}>
                <TouchableOpacity onPress={() => handleSignUp(email)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Main Menu')}>
                <Text style={styles.link}>Continue without signing in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 10,
        padding: 10,
        backgroundColor: '#eee',
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10,
        marginVertical: 10,
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
    link: {
        textDecorationLine: 'underline',
        textDecorationColor: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Start;
