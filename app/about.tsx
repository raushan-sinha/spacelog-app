
import AboutHero from "@/components/about/AboutHero";
import FeatureSection from "@/components/about/FeatureSection";
import MissionSection from "@/components/about/MissionSection";
import { ScrollView, StyleSheet, View } from "react-native";

export default function About() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <AboutHero />
                <MissionSection />
                <FeatureSection />
            </View>
        </ScrollView>
    );
}


//todo: Styles - 
const styles = StyleSheet.create({
    container: {

    },
})