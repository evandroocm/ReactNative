import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Faça seu cadastro.</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
            />
            <TextInput
                style={styles.input}
                placeholder="Seu nome"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />

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
            <TouchableOpacity style={styles.createAccountButton}>
                <Link href={"/login/login"}>
                    <Text style={styles.text}>Cadastrar</Text>
                </Link>
            </TouchableOpacity>
            
            </LinearGradient>

            <TouchableOpacity style={styles.createAccount}>
                <Text style={styles.account}>Já tem uma conta?</Text>
                <Link href={"/login/login"}>
                    <Text style={styles.createAccountBold}>Entrar</Text>
                </Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
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
        color: '#444',
    },
    input: {
        height: 40,
        borderColor: '#f8f8f8',
        borderRadius: 32,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginVertical: 5,
        width: '80%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.20,
        shadowRadius: 8
    },
    button: {
        backgroundColor: '#444',
        padding: 10,
        borderRadius: 32,
        marginTop: 20,
        width: '80%',
    },
    text: {
        color: '#f8f8f8',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    passwordContainer: {
        width: '80%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    pass: {
        color: '#444',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    createAccount: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 5,
    },
    account: {
        color: '#444',
        fontSize: 16,
        textAlign: 'center',
    },
    createAccountBold: {
        color: '#444',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccountButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});