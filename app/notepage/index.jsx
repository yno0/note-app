import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoteScreen = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    });
    const [notes, setNotes] = useState([
        // Example initial state for notes
        { id: 1, content: 'First note' },
        { id: 2, content: 'Second note' },
        { id: 3, content: 'Third note' },
    ]);
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text>Your text will appear here!</Text>
            
            <TouchableOpacity style={styles.addnoteButton} onPress={() => setNotes([...notes, { id: notes.length + 1, content: 'New note' }])}>
                <Text style={styles.textAddNote}>Click to add a note</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        
    },
    textAddNote: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    addnoteButton: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#72C358',
        borderRadius: 5,
    },
});

export default NoteScreen;