import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Divider, List, ListItem, Text } from "@ui-kitten/components"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

export default function AllNotes() {
	const [ notes, setNotes ] = useState([])
	const navigation = useNavigation()

	useFocusEffect(
		React.useCallback(() => {
			getNotes()
		}, [])
	)

	const getNotes = () => {
		AsyncStorage.getItem("NOTES").then((notes) => {
			setNotes(JSON.parse(notes))
		})
	}

	const renderItem = ({ item, index }) => (
		<ListItem
			title={<Text category="h5">{item}</Text>}
			onPress={() =>
				navigation.navigate("Note", {
					singleNote: item
				})}
		/>
	)

	return (
		<View style={{ backgroundColor: "#8fbc8f", justifyContent: 'flex-end' }}>
			<Text style={styles.title} category="h1">
				Notes
			</Text>
			<List
				style={styles.container}
				data={notes.reverse()}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 26
	},

	item: {
		marginVertical: 4
	},
	title: {
		textAlign: "center",
		marginTop: 10,
	},
	notes: {
		fontSize: 24
	}
})