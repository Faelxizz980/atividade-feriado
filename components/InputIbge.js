import { StyleSheet, View, TextInput } from 'react-native';

export const Inputibge = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite a Sigla do Estado"
        placeholderTextColor="#ebe8e8"
        autoCapitalize="characters"
        keyboardType="default"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Inputibge;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input:{ 
    height: 40, 
    width: '100%',
    borderColor: '#ebe8e8', 
    color: '#ebe8e8',
    borderWidth: 1, 
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
  }
});
