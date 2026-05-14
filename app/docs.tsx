
import { DocsHero, FeaturesGuide, GettingStarted } from "@/components/docs";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Docs() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <DocsHero />
                <GettingStarted />
                <FeaturesGuide />
            </View>
        </ScrollView>
    );
}


//todo: Styles - 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4e4e4',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5,
    },
})