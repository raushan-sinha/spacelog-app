import { Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Navbar() {
    return (
        <View style={{
            position: "absolute",
            top: 10,
            left: 0,
            right: 0,
            marginHorizontal: 16,
            height: 60,
            backgroundColor: "#111",
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            justifyContent: "flex-start",
            gap: 10,
            elevation: 5, // Android shadow
            shadowColor: "#000", // iOS shadow
            shadowOpacity: 0.2,
            shadowRadius: 6,
        }}>
            {/* Logo */}
            <FontAwesome name="space-shuttle" size={23} color="yellow" />

            {/* Title */}
            <Text style={{ color: 'yellow', fontFamily: 'monospace', fontSize: 20 }}>Spacelog</Text>
        </View>
    );
}