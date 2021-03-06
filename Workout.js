import React from 'react';
import { Text, View, Button } from 'react-native';
import { Image, ScrollView, TextInput } from 'react-native';
import styles from "./styles.js";   
import { useNavigation } from '@react-navigation/native';

export default function Workout({ workout }) {

    const navigator = useNavigation(); 

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
    const exerciseList = workout.exerciseList.map((exercise) => exercise.exerciseName); 

    const goToWorkout = () => {
        navigator.navigate("Workout Screen", {
            workout: workout
        });  
    }

    return (
        
        <View style={styles.topLevelWorkout}>
            
            <Text 
            style={styles.topLevelWorkoutTitle}
            onPress={goToWorkout}>
                 {months[workout.getStartTimeFormatted().getMonth()]} {workout.getStartTimeFormatted().getDate()} - {workout.title}
            </Text>

            <Text 
            style={styles.topLevelExcercises}
            onPress={goToWorkout}>
                {exerciseList}
            </Text>

        </View>
        
    );
}


