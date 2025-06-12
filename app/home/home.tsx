import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    const [produtos, SetProdutos] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [dados, SetDados] = useState<ProdutoDados[]>([]);
    
    interface ProdutoDados {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number
        };
    }

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                SetProdutos(data); 
                SetLoading(false); 
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                SetLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Home</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                            <TouchableOpacity style={styles.buttonDetails}>
                                <Text style={styles.textDetails}>Detalhes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 8,
    },
    image: {
        width: 110,
        height: 140,
        marginRight: 16,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    buttonDetails: {
        marginTop: 8,
        padding: 8,
        backgroundColor: '#3A3E3B',
        borderRadius: 4,
        alignItems: 'center',
    },
    textDetails: {
        color: '#f0f0f0',
        fontSize: 14,
        fontWeight: 'bold',
    },
});