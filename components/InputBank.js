import { StyleSheet, View, TextInput } from 'react-native';

export const InputBank = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={20}
        placeholder="Digite o Nome do Banco"
        keyboardType="default"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default InputBank;

const styles = StyleSheet.create({
  input:{ 
    height: 40, 
    width: '100%',
    borderColor: '#ebe8e8', 
    placeholderTextColor: '#ebe8e8', 
    color: '#ebe8e8',
    borderWidth: 1, 
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  }
});