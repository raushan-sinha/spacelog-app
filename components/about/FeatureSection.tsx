import { StyleSheet, Text, View } from "react-native";

const FEATURES = [
    "Daily space news updates",
    "HD astronomy images",
    "Rocket launch information",
    "Planet and galaxy insights",
    "NASA powered APIs",
    "Clean mobile-first experience",
];

export default function FeatureSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Features
            </Text>

            {FEATURES.map((item, idx) => (
                <View key={idx} style={styles.card}>
                    <Text style={styles.featureText}>
                        • {item}
                    </Text>
                </View>
            ))}
        </View>
    )
}


//todo: Styles -
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#101923',
        borderRadius: 14,
        margin: 20,
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fbab57',
        marginBottom: 12,
    },

    card: {
        backgroundColor: '#1a2634',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },

    featureText: {
        color: '#f3f3f3',
        fontSize: 16,
    },
})