import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from "../styles.js"; 
import TopNavBar from "../TopNavBar.js"; 
import BottomNavBar from "../BottomNavBar.js"; 

export default function ProfileScreen() {

    const placeHolderColor = "#a6a6a6"; 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    
    const signupHandler = () => {
        // sign the user up 
    }

    return (
        <View style={{height: "100%", color: "#fff"}}>
            <TopNavBar />
            <ScrollView
            contentContainerStyle={styles.workoutScreenContainer}
            showsVerticalScrollIndicator={false}>

                <Text style={styles.header}>Profile</Text>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View>
                    <Text 
                        style={styles.loginBtn}
                        onPress={signupHandler}>Login</Text>
                </View>

            </ScrollView>
            <BottomNavBar />
        </View>
    );
}