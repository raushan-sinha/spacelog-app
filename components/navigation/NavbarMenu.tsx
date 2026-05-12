import { FlatList, StyleSheet, Text, View } from "react-native";
import { NAVMENU_LINKS } from "./navbarMenu.data";
import { router } from "expo-router";

interface MenuCloseProps {
    onClose: () => void;
}

export default function NavbarMenu({ onClose }: MenuCloseProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={NAVMENU_LINKS}
                horizontal
                contentContainerStyle={{
                    justifyContent: 'flex-start',
                    flexGrow: 1,
                }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.menulinks} onPress={() => {
                        router.push(item.path);
                        onClose();
                    }}>
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
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#fbab57',
        padding: 10,
        borderRadius: 8,
        color: '#222222',
        marginRight: 10,
    }
})