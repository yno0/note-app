import { View } from "react-native";
import Welcome from "./components/Welcome";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         // Optional: Set a background color
      }}
    >
      <Welcome/>
    </View>
  );
}
