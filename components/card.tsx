import { Text, View, StyleSheet, Image, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function Card() {
const [usuarios, SetUsuarios] = useState([]);
const [loading, SetLoading] = useState(true);

useEffect(() =>{
    const fetchUsuarios = async () => {
    try {
        const fetchUsuarios = await fetch('https://fakestoreapi.com/products');
        const data = await fetchUsuarios.json();
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
        
        SetUsuarios(data);
        SetLoading(false);
    } catch (error) {
        
    }
};

    fetchUsuarios();
}, []);

if(loading){
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="0000ff"></ActivityIndicator>
        </View>
    );
}

return (
    <View className="bg-slate-200 h-full" style={styles.container}>
        <Text className="text-2xl mb-5">Lista de Produtos</Text>
        <View className="flex-1 p-5">
                {usuarios.map((item:any) => (
                    <View key={item.id} style={styles.card}>
                        <Text>{item.title}</Text>
                    </View>
                ))}
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: 350,
        height: 400,
        backgroundColor: "pink",
        marginBottom: 20,
        padding: 20,
        borderRadius: 20
    }
});