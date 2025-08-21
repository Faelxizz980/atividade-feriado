import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from 'react';
import InputDDD from '../components/InputDDD.js';
import CardDDD from '../components/cardDDD.js';
import * as dddService from '../services/ddd.js';


export default function Tela_DDD() {
    const [cities, setCities] = useState([])
    const [uf, setUf] = useState("")


    const verificarDDD = (ddd) => {
        if (!ddd || ddd.length !== 2) { // Verifica se o DDD tem o formato correto (2 dígitos)
            return;
        }

        // Consulta a API de DDDs
        dddService.getDDD(value)  // Supondo que você tenha uma função que consulta a API de DDDs
            .then((list_Cities) => {
                setCities(list_Cities.cities || []); // Assume que a resposta contém uma lista de cidades
                setUf(list_Cities[0].state); // Assume que a primeira cidade define o estado
            })
            .catch((error) => {
                console.error('Erro ao buscar DDD:', error);
                setCities([]);
                setUf("");
            });
    }

    return (
        <View style={styles.container}>
            <InputDDD 
                onChangeText={(ddd) => verificarDDD(ddd.trim())} 
            />
             <Text style={styles.titulo}>CIDADES DE 
                <Text style={{color: '#6edd13'}}> {uf}</Text>
            </Text>
            <ScrollView style={styles.scroll}  >
                {
                cities.map((city, index) => (
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
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: "center"
    },
    titulo:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: '20px', 
        marginTop: '1rem'
    },
    scroll:{
        width: '100%',
        height: '100vh', 
        padding: '10px', 
        borderRadius: '10px'
    }
})
