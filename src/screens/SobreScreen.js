// 1. Adicione o 'Image' aqui nos imports
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SobreScreen() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo} 
            />
            
            <Text style={styles.text}>Sobre o app</Text>
            <Text style={styles.proposta}>
                Este aplicativo foi criado por uma equipe excepcional, focada em trazer flexibilidade e facilidade, tornando a consulta de filmes e series mais rápida para usuários casuais.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#464953',
        paddingHorizontal: 20,
    },
    logo: {
        width: 2000,
        height: 200,
        marginBottom: 12,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fcfcfc',
    },
    subtitle: {
        fontSize: 20,
        color: '#64748b',
        marginTop: 8,
    },
    proposta: {
        fontSize: 14,
        color: '#8c9cb3',
        marginTop: 40,
        textAlign: 'center',
        lineHeight: 20,
    },
});