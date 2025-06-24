import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#72C358",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        contentStyle: {
          paddingHorizontal:16,
          paddingTop: 20, 
        },
    
      }}
    >
      <Stack.Screen name="index" options={{title: "Home"}}/>
      <Stack.Screen name="notepage" options={{title: "Notes"}}/>
    </Stack>
    );
}
