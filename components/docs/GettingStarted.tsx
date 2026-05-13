import { StyleSheet, Text, View } from "react-native";

export default function GettingStarted() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Getting Started
            </Text>

            <Text style={styles.step}>
                1. Open the app
            </Text>

            <Text style={styles.step}>
                2. Browse latest space news
            </Text>

            <Text style={styles.step}>
                3. Tap articles to explore details
            </Text>

            <Text style={styles.step}>
                4. Discover planets, galaxies, and launches
            </Text>

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
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fbab57',
        marginBottom: 16,
    },

    step: {
        color: '#f5f5f5',
        fontSize: 16,
        marginBottom: 12,
    },
})