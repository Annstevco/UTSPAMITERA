import * as eva from "@eva-design/eva"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import AllNotes from "./screens/AllNotes"
import CreateNote from "./screens/createNote"
import Note from "./screens/Note"

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
		<BottomNavigationTab title="Buat DayList Baru" />
		<BottomNavigationTab title="Semua DayList" />
	</BottomNavigation>
)

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
		<Screen 
		name="Create" 
		component={CreateNote} 
		options={{
			headerTitleAlign:'center',
			title: 'DayList Baru',
			headerStyle: {
			  backgroundColor: '#f08080',
			  borderRadius : 13
			},
			headerTintColor: '#2f4f4f',
		  }}
		/>
		<Screen 
		name="AllNotes" 
		component={AllNotes}
		options={{
			headerTitleAlign:'center',
			title: 'DayList Saya',
			headerStyle: {
			  backgroundColor: '#f08080',
			  borderRadius : 13
			},
			headerTintColor: '#2f4f4f',
		  }} />
		<Screen name="Note" component={Note} />
	</Navigator>
)

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</ApplicationProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})