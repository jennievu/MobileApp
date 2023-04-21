import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbBcY0Bgswd6_qnIDvhJ2WHysKykRSvsc",
    authDomain: "mobileapp-team5.firebaseapp.com",
    projectId: "mobileapp-team5",
    storageBucket: "mobileapp-team5.appspot.com",
    messagingSenderId: "552786261093",
    appId: "1:552786261093:web:d902a73c193717efd7028c",
    measurementId: "G-5V4E020X2F"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        try {
            const db = getFirestore();
            const userRef = collection(db, 'users');
            const docData = {
                first_name: firstName,
                last_name: lastName,
                date_of_birth: dateOfBirth,
                password: password
            };
            const docRef = await addDoc(userRef, docData);
            console.log('Document written with ID:', docRef.id);
        } catch (error) {
            console.log('Error adding document:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput style={styles.input}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            <Text style={styles.label}>Last Name:</Text>
            <TextInput style={styles.input}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            <Text style={styles.label}>Date of Birth:</Text>
            <TextInput style={styles.input}
                value={dateOfBirth}
                onChangeText={(text) => setDateOfBirth(text)}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput style={styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput style={styles.input}
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 20,
        backgroundColor: '#eee',
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default SignUp;