import { Stack } from 'expo-router';
import React from 'react';

const NotesLayout = () => {

    return(
        <Stack 
            screenOptions={{
                headerShown: false,
            }}
        />
    )
}

export default NotesLayout;