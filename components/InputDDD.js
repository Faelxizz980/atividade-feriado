import { StyleSheet, View, TextInput } from 'react-native';

export const  InputDDD = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o DDD"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{ 
    height: 40, 
    width: '100%',
    borderColor: '#ebe8e8', 
    placeholderTextColor: '#ebe8e8', 
    color: '#ebe8e8',
    backgroundColor :'#414141',
    borderWidth: 1, 
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default  InputDDD ;