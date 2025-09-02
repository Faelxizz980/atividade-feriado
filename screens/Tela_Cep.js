import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import InputCep from "../components/inputCep";
import {CardCep} from "../components/Cards.jsx";

import * as cep from '../services/arroz.js';

export default function Tela_Cep() {
    
    const [address, setAddress] = useState(null);
    const [cepValue, setCepValue] = useState("");

    const verificarCep = (cepInput) => {
        if (!cepInput || cepInput.length !== 8) { // Verifica se o CEP tem 8 dígitos
            setAddress(null);
            setCepValue("");
            return;
        }

        // Consulta a API de CEPs
        cep.getcep(cepInput)  
            .then((data) => {
                console.log("Dados retornados da API:", data);
                setAddress(data);
                setCepValue(cepInput);
            })
            .catch((error) => {
                console.error('Erro ao buscar CEP:', error);
                setAddress(null);
                setCepValue("");
            });
    };

    return (
        <View style={styles.container}>
            <InputCep 
                onChangeText={(cep) => verificarCep(cep.trim())} 
            />
            <Text style={styles.titulo}>
                ENDEREÇO DO CEP 
                <Text style={{ color: '#6edd13' }}> {cepValue}</Text>
            </Text>
            <ScrollView style={styles.scroll}>
                {address && (
                    <CardCep
                        cep={cepValue}
                        estado={address.state}
                        city={address.city}
                        bairro={address.neighborhood}
                        rua={address.street}
                    />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: "center",
        backgroundColor : "#0c2166ff"
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