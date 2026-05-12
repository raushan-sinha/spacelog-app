
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import { StyleSheet, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <AboutHero />
            <MissionSection />
        </View>
    );
}


//todo: Styles - 
const styles = StyleSheet.create({
    container: {
       
    },
})