import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function HomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela inicial </Text>
      <button title="sobre" onPress={() => navigation.navigate("sobre")} />
    </View>
  );
};

function Sobre({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <button title="voltar" onPress={() => navigation.goback("Voltar")} /> 
    </View>
  );
};




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

  ;
