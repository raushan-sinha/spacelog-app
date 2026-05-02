import { FlatList, Pressable, Text, View } from "react-native";
import { MenuItemProps } from "./types";
import { menuItems } from "./data";

interface MenuCloseProps {
    onClose: () => void
}

export default function NavbarMenu({ onClose }: MenuCloseProps) {
    const renderItem = ({ item }: { item: MenuItemProps }) => {
        return (
            <Pressable
                style={{
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: '#222',
                }}
                onPress={onClose}
            >
                <Text style={{ color: 'yellow', fontFamily: 'monospace', fontSize: 16 }}>
                    {item.label}
                </Text>
            </Pressable>
        )
    }

    return (
        <View
            style={{
                marginHorizontal: 16,
                backgroundColor: '#111',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                elevation: 5,
                overflow: 'hidden',
                top: 5
            }}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}