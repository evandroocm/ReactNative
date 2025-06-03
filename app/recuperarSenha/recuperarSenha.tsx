import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RecuperarSenha() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-200">
        <Text className="text-2xl mb-5">Recuperar Senha</Text>
        <TextInput
            className="border border-gray-300 rounded p-2 mb-4 w-80"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
        />
        <TouchableOpacity className="bg-blue-500 p-3 rounded">
            <Text className="text-white">Enviar Instruções</Text>
        </TouchableOpacity>
        </View>
    );
}