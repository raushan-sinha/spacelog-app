import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { CONTACT_LINKS } from "@/data";

export default function ContactSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Contact Us
            </Text>

            <View style={styles.iconContainer}>
                {
                    CONTACT_LINKS.map((link, index) => {
                        const IconComponent = link.fontName;
                        return (
                            <Pressable key={index} style={styles.iconButton} onPress={() => Linking.openURL(link.url)}>
                                <IconComponent name={link.name} size={24} color={link.color} />
                            </Pressable>
                        )
                    })
                }
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
