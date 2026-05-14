import { StyleSheet, Text, View } from "react-native";
import { FEATURES_GUIDE } from "./docs.data";

export default function FeaturesGuide() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Features Guide
            </Text>

            {
                FEATURES_GUIDE.map((feature, index) => (
                    <View key={index} style={styles.card}>

                        <Text style={styles.title}>
                            {feature.title}
                        </Text>

                        <Text style={styles.description}>
                            {feature.description}
                        </Text>

                    </View>
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
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#1a2634',
        padding: 16,
        borderRadius: 14,
        marginBottom: 14,
    },

    title: {
        color: '#57d5fbff',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },

    description: {
        color: '#f3f3f3',
        fontSize: 15,
        lineHeight: 22,
    },
})