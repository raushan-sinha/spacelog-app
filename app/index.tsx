import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: 'red', fontSize: 18, fontFamily: 'monospace'}}>Welcome to my First Mobile App - Spacelog</Text>
      <Text style={{color: 'red', fontSize: 18, fontFamily: 'monospace'}}>Hello</Text>
      <Text style={{color: 'green', fontSize: 18, fontFamily: 'monospace'}}>Hello</Text>
      <Text style={{color: 'green', fontSize: 18, fontFamily: 'monospace'}}>Hello</Text>
      <Text style={{color: 'green', fontSize: 18, fontFamily: 'monospace'}}>Hello</Text>
    </View>
  );
}
