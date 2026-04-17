import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>👷</Text>
            <Text style={styles.text}>404 Not Found</Text>
            <Text style={styles.subtitle}>Ainda em constução</Text>
            <Text style={styles.proposta}>Se você é da equipe, crie essa pagina!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4ff',
    },
    emoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e40af',
    },
    subtitle: {
        fontSize: 20,
        color: '#64748b',
        marginTop: 8,
    },
    proposta: {
        fontSize: 12,
        color: '#000000',
        marginTop: 40,
        textAlign: 'center',
    },
});