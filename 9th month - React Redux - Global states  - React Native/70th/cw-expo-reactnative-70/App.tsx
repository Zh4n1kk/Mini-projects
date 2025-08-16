import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { TPlace } from './types/type';
import { PlaceList } from './components/ui/PlaceList';

export default function App() {
  const [placeName, setPlaceName] = useState('')
  const [places, setPlaces] = useState<TPlace[]>([])

  const addPlace = () => {
    setPlaces((prev) => [...prev, {placeName, key: Date.now() }])
  }

  return (
    <View style={styles.container}>
    <View style={styles.controls}>
      <TextInput style={styles.textInputStyle} placeholder='Placehold-hold-hold' value={placeName} onChangeText={(value) => setPlaceName(value)} />
        <Button title='Add Card' onPress={addPlace} />
    </View>
    <PlaceList places={places} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
        width: "90%",
    },
    controls: {
        flexDirection: "row",
        marginTop: 60,
    },
    placeList: {
        width: "100%",
        padding: 10,
    },
});
