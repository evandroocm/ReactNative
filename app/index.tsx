import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.subtitle}>Entre com a sua conta.</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />

            <TouchableOpacity>
                <Link href={"/recuperarSenha/recuperarSenha"}>
                    <Text style={styles.pass}>Esqueceu à senha?</Text>
                </Link>
            </TouchableOpacity>

            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} 
            />
            <LinearGradient
                colors={['#9A39DB', '#D347E6', '#FF00E1']}
                style={styles.button}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} 
            >
            <Text style={styles.text}>Entrar</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderRadius: 32,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.20,
        shadowRadius: 8
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 32,
        marginTop: 20,
        width: '80%',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pass: {
        color: '#666',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
});