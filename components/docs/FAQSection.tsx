import { StyleSheet, Text, View } from "react-native";
import { FAQ_DATA } from "./docs.data";

export default function FAQSection() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Frequently Asked Questions
            </Text>

            {
                FAQ_DATA.map((faq, index) => (
                    <View key={index} style={styles.card}>

                        <Text style={styles.question}>
                            {faq.question}
                        </Text>

                        <Text style={styles.answer}>
                            {faq.answer}
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
        backgroundColor: '#101923',
        padding: 16,
        borderRadius: 14,
        marginBottom: 14,
    },

    question: {
        color: '#57d5fbff',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 8,
    },

    answer: {
        color: '#f3f3f3',
        fontSize: 15,
        lineHeight: 22,
    },
})