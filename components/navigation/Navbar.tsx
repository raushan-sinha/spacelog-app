import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";

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
                        <MaterialIcons name="menu-open" size={33} color="white" />
                    )}
                </Pressable>
            </View>
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
        padding: 16
    },

    navTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    title: {
        color: 'cyan',
        fontSize: 20,
        fontWeight: 'bold',
    },
})