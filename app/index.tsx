//exercicio 5
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {
const [usuarios, SetUsuarios] = useState([]);
const [loading, SetLoading] = useState(true);

useEffect(() =>{
    const fetchUsuarios = async () => {
    try {
        const fetchUsuarios = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        
        SetUsuarios(data);
        SetLoading(false);
    } catch (error) {
        
    }
};

    fetchUsuarios();
}, []);

return (
    <View className="bg-slate-200 h-full">
        <View className="w-full h-16 bg-indigo-500 justify-center items-center">
            <Text className="color-slate-50 justify-start text-2xl font-bold">Loja Virtual</Text>
        </View>

    </View>
);
}
