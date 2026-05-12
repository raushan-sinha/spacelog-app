import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ContactSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Contact Us
            </Text>

            <View style={styles.iconContainer}>
                <Pressable style={styles.iconButton} onPress={() => Linking.openURL('https://instagram.com/')}>
                    <FontAwesome6 name="instagram" size={24} color="#E1306C" />
                </Pressable>
                
                <Pressable style={styles.iconButton} onPress={() => Linking.openURL('https://x.com/')}>
                    <FontAwesome6 name="x-twitter" size={24} color="#ffffff" />
                </Pressable>
                
                <Pressable style={styles.iconButton} onPress={() => Linking.openURL('mailto:hello@spacelog.com')}>
                    <MaterialCommunityIcons name="email" size={26} color="#fbab57" />
                </Pressable>
            </View>
        </View>
    )
}

//todo: Styles -
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#101923',
        borderRadius: 14,
        margin: 10,
        marginBottom: 30,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fbab57',
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    iconButton: {
        backgroundColor: '#1a2634',
        padding: 14,
        borderRadius: 40,
    },
})
