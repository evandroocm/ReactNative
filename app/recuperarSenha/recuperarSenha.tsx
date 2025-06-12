import React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export default function RecuperarSenha() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recuperar Senha</Text>
            <Text style={styles.description}>
                Insira seu e-mail abaixo para receber instruções de recuperação de senha.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    description: {
        textAlign: "center",
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        width: "80%",
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
        
    },
    button: {
        width: "80%",
        backgroundColor: "#3A3E3B",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});