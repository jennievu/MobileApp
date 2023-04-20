import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class MainMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Main Menu</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Manage Medications')}>
                    <Text style={styles.buttonText}>Manage Medication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('My Data')}>
                    <Text style={styles.buttonText}>My Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Add Medication')}>
                    <Text style={styles.buttonText}>Add Medication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Mood Log')}>
                    <Text style={styles.buttonText}>Mood Log</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30
    },
    button: {
        backgroundColor: '#0080ff',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginBottom: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
});
export default MainMenu;