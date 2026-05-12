import { StyleSheet, Text, View } from "react-native";

const TECH_STACK = [
    "React Native",
    "Expo Router",
    "TypeScript",
    "REST APIs",
    "NASA APIs",
    "NativeWind",
];

export default function TechStack() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Tech Stack
            </Text>

            <View style={styles.techContainer}>
                {
                    TECH_STACK.map((tech, index) => (
                        <View key={index} style={styles.techBadge}>
                            <Text style={styles.techText}>
                                {tech}
                            </Text>
                        </View>
                    ))
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
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fbab57',
        marginBottom: 20,
    },

    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    techBadge: {
        backgroundColor: '#fbab57',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 30,
        marginRight: 10,
        marginBottom: 10,
    },

    techText: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 14
    },
})