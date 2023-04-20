import medications from './medication-list.json';
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import SearchBar from "./SearchBar";

const AddMedication = () => {
  const [medicationsState, setMedicationsState] = useState([]);

  useEffect(() => {
    const newMedicationsState = medications.medications.map( medications => {
      return medications.name
    })
    setMedicationsState(newMedicationsState);
  }, []);

  const hasMedications = medicationsState.length > 0

  return (
    <View>
      {hasMedications ? <SearchBar items={medicationsState} /> : <Text>Loading...</Text>}
    </View>
  )
}

export default AddMedication;
