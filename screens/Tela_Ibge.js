import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import Inputibge from '../components/InputIbge.js';
import CardIbge from '../components/CardIbge.js';

import * as ibge from '../services/Ibge.js';

export default function Tela_Ibge() {
  const [l_c, setCidades] = useState([]);
  const [loading, setLoading] = useState(false);

  const verificarIbge = (sigla) => {
    if (!sigla || sigla.length !== 2) {
      setCidades([]);
      return;
    }

    setLoading(true);
    ibge.getIbge(sigla)
      .then((list_Cidades) => {
        setCidades(list_Cidades || []);
      })
      .catch((error) => {
        console.error('Erro ao buscar IBGE:', error);
        setCidades([]);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Inputibge 
        onChangeText={(sigla) => verificarIbge(sigla.trim().toUpperCase())} 
      />

      {loading && <Text style={styles.loading}>Carregando...</Text>}

      {!loading && l_c.length === 0 && (
        <Text style={styles.info}>Digite uma sigla válida (ex: SP, RJ)</Text>
      )}

      <FlatList
        data={l_c}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardIbge Nome={item.nome} Codigo_Ibge={item.id} />
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#0d1a63',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loading: {
    color: '#fff',
    marginTop: 10,
  },
  info: {
    color: '#bbb',
    marginTop: 10,
  },
  list: {
    marginTop: 16,
    width: "100%",
  },
});
