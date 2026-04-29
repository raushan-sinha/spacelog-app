import { Pressable, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
            justifyContent: "space-between",
            elevation: 5, // Android shadow
            shadowColor: "#000", // iOS shadow
            shadowOpacity: 0.2,
            shadowRadius: 6,
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}>
                {/* Logo */}
                <FontAwesome name="space-shuttle" size={23} color="yellow" />

                {/* Title */}
                <Text style={{ color: 'yellow', fontFamily: 'monospace', fontSize: 20 }}>Spacelog</Text>
            </View>

            <View>
                {/* Menu bar + Close bar */}
                <Pressable onPress={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <Entypo name="cross" size={35} color="yellow" />
                    ) : (
                        <Entypo name="menu" size={35} color="yellow" />
                    )}
                </Pressable>
            </View>
        </View>
    );
}