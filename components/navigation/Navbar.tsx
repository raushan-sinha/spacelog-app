import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavbarMenu from "./NavbarMenu";

const NAV_TITLE = 'Spacelog'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.navTitle}>
                    <FontAwesome5 name="space-shuttle" size={20} color="yellow" />
                    <Text style={styles.title}>{NAV_TITLE}</Text>
                </View>

                <Pressable onPress={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <Entypo name="cross" size={33} color="tomato" />
                    ) : (
                        <MaterialCommunityIcons name="menu-down-outline" size={33} color="white" />
                    )}
                </Pressable>
            </View>

            {isMenuOpen && (
                <NavbarMenu />
            )}
        </SafeAreaView>
    );
}


//todo: Styles -
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 12
    },

    navTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    title: {
        color: 'cyan',
        fontSize: 22,
        fontWeight: 'bold',
    },
})