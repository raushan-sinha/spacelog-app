import { StyleSheet, Text, View } from "react-native";

export default function DocsHero() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Spacelog Docs
            </Text>

            <Text style={styles.subtitle}>
                Learn how to use Spacelog features,
                explore documentation, and understand the platform.
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
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#cfcfcf',
    },
})