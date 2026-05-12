import { StyleSheet, Text, View } from "react-native"

export default function AboutHero() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                About Spacelog
            </Text>

            <Text style={styles.subtitle}>
                Explore the universe through daily space discoveries,
                astronomy insights, rocket launches, and stunning cosmic imagery.
            </Text>
        </View>
    )
}


//todo: Styles -
const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
        backgroundColor: '#168e6a',
        borderRadius: 14,
        margin: 20,
    },

    title: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#cfcfcf',
    },
})