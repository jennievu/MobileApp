import { Button, Text } from "react-native";

export const HomeScreen = ({ navigation }) => {
    return (
        <Text>
            HomeScreen
            <Button
                title="navigate to Manage Medications"
                onPress={() =>
                    navigation.navigate('Manage Medications', { MedicationName: 'Aspirin' })
                }
            />
        </Text>
    );
};
