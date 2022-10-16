import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"
import { Button } from "@ui-kitten/components"
import React, { useState } from "react"
import { Dimensions, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"

export default function CreateNote() {
	const [ note, setNote ] = useState("")
	const navigation = useNavigation()

	const saveNote = async () => {
		const value = await AsyncStorage.getItem("NOTES")
		const n = value ? JSON.parse(value) : []
		n.push(note)
		await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("AllNotes"))
		setNote("")
	}

	return (
		<View style={styles.container}>
			<TextInput
				value={note}
				onChangeText={setNote}
				style={{ color: "black", fontSize: 22 }}
				multiline={true}
				autoFocus
				selectionColor="#fff"
				placeholder='Isi DayList'
				placeholderTextColor="black"
			/>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottom}>
				<Button style={styles.button} appearance="filled" onPress={saveNote}>
					Buat DayList
				</Button>
			</KeyboardAvoidingView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7fffd4",
		color: "white",
		padding: 15,
		paddingTop: 30,
		borderRadius: 30,

		width: Dimensions.get("window").width
	},
	bottom: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 36
	},
	button: {
		alignItems: 'center',
    	justifyContent: 'center',
    	paddingVertical: 12,
    	paddingHorizontal: 32,
    	borderRadius: 100,
   		elevation: 3,
    	backgroundColor: '#4682b4'
	}
})