import { FlatList, StyleSheet, Text, View } from "react-native";
import { NAVMENU_LINKS } from "./navbarMenu.data";

export default function NavbarMenu() {
    return (
        <View style={styles.container}>
            <FlatList
                data={NAVMENU_LINKS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.menulinks}>
                        {item.label}
                    </Text>
                )}
            />
        </View>
    );
}


//todo: Styles -
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    menulinks: {
        fontSize: 18,
        marginBottom: 12,
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 8,
    }
})