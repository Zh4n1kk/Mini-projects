import { GestureResponderEvent, StyleSheet, Text, View } from "react-native"

type Props = {
    placeName: string
    onPress: (e:GestureResponderEvent) => void
}

export const PlaceItem = ({ placeName, onPress }: Props) => {
    return(
        <View>
            <Text style={styles.place}>{placeName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    place: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#bbb",
    },
})