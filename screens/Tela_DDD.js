import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import InputDDD from '../components/InputDDD.js';
import CardDDD from '../components/cardDDD.js';

import * as ddd from '../services/ddd.js';


export default function Tela_DDD() {
    
    const [cities, setCities] = useState([]);
    const [uf, setUf] = useState("");

    const verificarDDD = (ddds) => {
        if (!ddds || ddds.length !== 2) { // Verifica se o DDD tem 2 dígitos
            setCities([]);
            setUf("");
            return;
        }

        // Consulta a API de DDDs
        ddd.getDDD(ddds)  
            .then((list_Cities) => {
                // Ajuste de acordo com o formato que a API retorna
                setCities(list_Cities.cities || []);
                setUf(list_Cities.state || "");
            })
            .catch((error) => {
                console.error('Erro ao buscar DDD:', error);
                setCities([]);
                setUf("");
            });
    };

    return (
        <View style={styles.container}>
            <InputDDD 
                onChangeText={(ddd) => verificarDDD(ddd.trim())} 
            />
            <Text style={styles.titulo}>
                CIDADES DE 
                <Text style={{ color: '#6edd13' }}> {uf}</Text>
            </Text>
            <ScrollView style={styles.scroll}>
                {cities.map((city, index) => (
                    <CardDDD
                        key={index}
                        city={city}
                        uf={uf}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: "center",
        backgroundColor: "#0d1a63" // só um exemplo
    },
    titulo:{
        color: '#f5f3f3', 
        fontWeight: 'bold', 
        fontSize: 20,       // número, sem "px"
        marginTop: 16       // número, sem "rem"
    },
    scroll:{
        width: '100%',
        flex: 1,            // em vez de "100vh"
        padding: 10, 
        borderRadius: 10
    }
});
