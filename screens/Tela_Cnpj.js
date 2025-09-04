import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import InputCnpj from '../components/InputCnpj.js';
import {CardCnpj} from '../components/Cards.jsx';
import * as cnpj from '../services/cnpj.js';

export default function Tela_Cnpj(){
    
    const [company, setCompany] = useState(null);
    const [cnpjValue, setCnpjValue] = useState("");

    const verificarCnpj = (cnpjInput) => {
        if (!cnpjInput || cnpjInput.length !== 14) { // Verifica se o CNPJ tem 14 dígitos
            setCompany(null);
            setCnpjValue("");
            return;
        }
        cnpj.getcnpj(cnpjInput)  
            .then((data) => {
                console.log("Dados retornados da API:", data);
                setCompany(data);
                setCnpjValue(cnpjInput);
            })
            .catch((error) => {
                console.error('Erro ao buscar CNPJ:', error);
                setCompany(null);
                setCnpjValue("");
            });
    };
    return(
        <View style={styles.container}>
            <InputCnpj
                onChangeText={(cnpj) => verificarCnpj(cnpj.trim())}
            />
            <Text style={styles.titulo}>
                DADOS DO CNPJ
                <Text style={{ color: '#6edd13' }}> {cnpjValue}</Text>
            </Text>
            <ScrollView style={styles.scroll}>
                {company && (
                    <CardCnpj
                        cnpj={cnpjValue}
                        razao_social={company.razao_social}
                        nome_fantasia={company.nome_fantasia}
                        uf={company.uf}
                        cep={company.cep}
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
        backgroundColor: '#1e1e1e',
        padding: 20
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