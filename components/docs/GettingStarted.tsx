import { StyleSheet, Text, View } from "react-native";

const STARTED_DATA = [
    'Open the app',
    'Browse latest space news',
    'Tap articles to explore details',
    'Discover planets, galaxies, and launches',
];

export default function GettingStarted() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Getting Started
            </Text>

            {
                STARTED_DATA.map((item, index) => (
                    <Text key={index} style={styles.step}>
                        {index + 1}. {item}
                    </Text>
                ))
            }

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