import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './components/MainMenu';
import ManageMedications from './components/ManageMedications';
import MyData from './components/MyData';
import LogScreen from './components/LogScreen';
import TakePill from './components/TakePill';
import Login from './components/Login';
import AddMedication from './components/AddMedication';
import AddDoseInfo from './components/AddDoseInfo';
import SearchBar from './components/SearchBar';
import AddFrequency from './components/AddFrequency';
import SignUp from './components/SignUp';
import Start from './components/Start';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Menu" component={MainMenu} options={{title: 'Welcome'}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Manage Medications" component={ManageMedications}/>
        <Stack.Screen name="My Data" component={MyData}/>
        <Stack.Screen name="Log Screen" component={LogScreen}/>
        <Stack.Screen name="Take Pill" component={TakePill}/>
        <Stack.Screen name="Add Medication" component={AddMedication} />
        <Stack.Screen name="Add Dose Info" component={AddDoseInfo} />
        <Stack.Screen name="Add Frequency" component={AddFrequency} />
        <Stack.Screen name="Search Bar" component={SearchBar} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
