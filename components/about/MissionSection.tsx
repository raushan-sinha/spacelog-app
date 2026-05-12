import { StyleSheet, Text, View } from "react-native";

export default function MissionSection() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Our Mission
            </Text>

            <Text style={styles.description}>
                Spacelog is designed to make space exploration
                simple, modern, and accessible for everyone.

                Our goal is to help users stay connected with
                the latest discoveries from space agencies,
                astronomy research, and cosmic events happening
                across the universe.
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
        marginBottom: 12,
    },

    description: {
        fontSize: 16,
        lineHeight: 26,
        color: '#f5f5f5',
    },
})