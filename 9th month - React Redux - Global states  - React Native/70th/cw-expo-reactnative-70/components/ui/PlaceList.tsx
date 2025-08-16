import { FlatList, StyleSheet, View } from "react-native";
import { TPlace } from "../../types/type";
import { PlaceItem } from "./PlaceItem";

type Props = {
	places: TPlace[];
};

export const PlaceList = ({ places }: Props) => {
    const placePressedHandler = (item: number) => {
        alert(item);
    };

	return (
		<View>
			<FlatList
				data={places}
				renderItem={({ item }) => (
					<PlaceItem
						key={item.key}
						placeName={item.placeName}
						onPress={() => placePressedHandler(Number(item.key))}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
    placeList: {
        width: "100%",
        padding: 10,
    },
});