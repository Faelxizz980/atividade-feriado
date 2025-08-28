import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import InputBank from "../components/inputBank.js";
import CardBank from "../components/cardBank.js";

import * as bank from '../services/bank.js';

export default function Tela_Bank() {
    
    const [bankData, setBankData] = useState(null);
    const [bankValue, setBankValue] = useState("");

    const verificarBank = (bankInput) => {
        if (!bankInput || bankInput.length !== 4) { // Verifica se o Bank tem 4 dígitos
            setBankData(null);
            setBankValue("");
            return;
        }

        // Consulta a API de Banks
        bank.getBank(bankInput)  
            .then((data) => {
                console.log("Dados retornados da API:", data);
                setBankData(data);
                setBankValue(bankInput);
            })
            .catch((error) => {
                console.error('Erro ao buscar Bank:', error);
                setBankData(null);
                setBankValue("");
            });
    };

    return (
        <View style={styles.container}>
            <InputBank 
                onChangeText={(bank) => verificarBank(bank.trim())} 
            />
            <Text style={styles.titulo}>
                DADOS DO BANK 
                <Text style={{ color: '#6edd13' }}> {bankValue}</Text>
            </Text>
            <ScrollView style={styles.scroll}>
                {bankData && (
                    <CardBank
                        bank={bankValue}
                        bankData={bankData}
                    />
                )}
            </ScrollView>
        </View>
    );
}