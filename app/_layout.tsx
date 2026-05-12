import { Navbar } from "@/components/navigation";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            <Navbar />

            <Stack screenOptions={{ headerShown: false }} />
        </View>
    );
}