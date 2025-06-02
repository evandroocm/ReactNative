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
        <Text className="text-2xl mb-5" style={styles.banner}>Lista de Produtos</Text>
        <View className="flex-1 p-5">
                {usuarios.map((item:any) => (
                    <View key={item.id} style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>Categoria: {item.category}</Text>
                        <Text style={styles.price}>R$ {item.price}</Text>
                    </View>
                ))}
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    banner: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        height: 450,
        width: 400,
        justifyContent: 'center',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        gap: 15,
        paddingBlock: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#57C785',
    },
});