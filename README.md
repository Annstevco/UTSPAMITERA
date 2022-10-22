# UTSPAMITERA

<h2>Nama Aplikasi</h2>
DayList

<h2>Deskripsi Aplikasi</h2>
ini merupakan aplikasi yang digunakan untuk membuat catatan, sehingga
mempermudah orang untuk dapat mengingat hal-hal penting yang di lakukan pada hari-hari tertentu

<h2>Daftar package yang digunakan (expo)</h2>
<br>import * as eva from "@eva-design/eva"</br>
<br>import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"</br>
<br>import { NavigationContainer } from "@react-navigation/native"</br>
<br>import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from "@ui-kitten/components"</br>
<br>import React from "react"</br>
<br>import { StyleSheet } from "react-native"<br>
<br>import AllNotes from "./screens/AllNotes"<br>
<br>import CreateNote from "./screens/createNote"<br>
<br>import Note from "./screens/Note"</br>
<br>import AsyncStorage from '@react-native-async-storage/async-storage'</br>
<br>import { useNavigation } from "@react-navigation/native"</br>
<br>import { Button } from "@ui-kitten/components"</br>
<br>import React, { useState } from "react"</br>
<br>import { Dimensions, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"</br>

<h2>Cara menginstall aplikasi (dalam mode pengembangan)</h2>
untuk menginstall dalam apk dapat dengan klik link dibawah ini
<br><a href="https://expo.dev/accounts/annikestellacova/projects/DayList/builds/16ebe12d-1b38-405b-ad1e-a33d06c6da7e">link download apk Daylist</a></br>
