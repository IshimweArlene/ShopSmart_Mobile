import { StyleSheet, Text, View } from "react-native";
export default function OrdersTabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
            <Text style={styles.subtitle}>Manage your orders here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});