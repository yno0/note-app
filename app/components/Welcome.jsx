import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PostIt from "../../assets/images/post-it.png"; // Ensure the path is correct

export default function Welcome() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={PostIt} />
      <Text style={styles.title}>Welcome Note App!</Text>
      <Text style={styles.subtext}>Capture your thoughts anytime anywhere</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/notepage");
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 900,
    marginBottom: 10,
    fontFamily: "Poppins-Bold",
  },
  subtext: {
    fontSize: 15,
    color: "#555",
  },
  text: {
    fontFamily: "Poppins-Regular",
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#72C358",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "SpaceMono-Regular",
  },
});
