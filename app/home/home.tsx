import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
    const [produtos, SetProdutos] = useState([]);
    const [loading, SetLoading] = useState(true);
    
    useEffect(() =>{
        const fetchProdutos = async () => {
        try {
            const fetchProdutos = await fetch('https://fakestoreapi.com/products');
            const data = await fetchProdutos.json();
            fetch('https://fakestoreapi.com/products')
            .then(response => renponse.json())
            .then(data => console.log(data));
            
            SetProdutos(data);
            SetLoading(false);
        } catch (error) {
            
        }
    };
    
        fetchProdutos();
    }, []);
    
    if(loading){
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="0000ff"></ActivityIndicator>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Home</Text>
            <Text style={styles.subtitle}>Esta é a página inicial do aplicativo.</Text>
            <View>
                {products.map((item:any) => (
                    <View key={item.id}>
                        <Text>Item {item}</Text>
                        <Image source={{ uri: item.image }} style={styles.image} />                    </View>
                ))}
            </View>
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#444',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});