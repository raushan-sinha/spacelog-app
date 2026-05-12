
import { AboutHero, ContactSection, FeatureSection, MissionSection, TechStack } from "@/components/about";
import { ScrollView, StyleSheet, View } from "react-native";

export default function About() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <AboutHero />
                <MissionSection />
                <FeatureSection />
                <TechStack />
                <ContactSection />
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