import { useState } from "react";
import { ActivityIndicator, Text, TextInput, View, ScrollView, TouchableOpacity } from "react-native";

export default function Home() {
    const [marca, setMarca] = useState('');
    const [modelos, setModelos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    async function fetchModelosPorMarca() {
        setLoading(true);
        setErro('');
        setModelos([]);

        try {
            const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
            const marcas = await response.json();

            const marcaEncontrada = marcas.find(m => m.nome.toLowerCase() === marca.toLowerCase());

            if (!marcaEncontrada) {
                setErro('Marca não encontrada.');
                setLoading(false);
                return;
            }

            const modelosResponse = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaEncontrada.codigo}/modelos`);
            const modelosData = await modelosResponse.json();

            setModelos(modelosData.modelos);
        } catch (error) {
            console.error('Erro ao buscar modelos:', error);
            setErro('Erro ao buscar modelos.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#504673', paddingLeft: '30%', paddingRight: '30%', paddingTop: 50, gap: 10}}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: 'white' }}>Buscador de Modelos de Carros</Text>

            <TextInput
                placeholder="Digite a marca (ex: Honda)"
                value={marca}
                onChangeText={setMarca}
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 10,
                    color: 'white',
                }}
            />

            <TouchableOpacity
                onPress={fetchModelosPorMarca}
                style={{
                    backgroundColor: '#9D85F2',
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 20
                }}
            >
                <Text style={{ color: 'black', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Buscar</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" color="#0000ff" />}

            {erro ? <Text style={{ color: 'red', marginBottom: 10 }}>{erro}</Text> : null}

            <ScrollView>
                {modelos.map((modelo, index) => (
                    <View key={index} style={{
                        backgroundColor: 'white',
                        padding: 15,
                        marginBottom: 10,
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3.84
                    }}>
                        <Text style={{ fontSize: 16 }}>{modelo.nome}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
