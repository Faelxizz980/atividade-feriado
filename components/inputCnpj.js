import { StyleSheet,View, TextInput } from "react-native";

export const  InputCnpj = ({ onChangeText }) => {
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            maxLength={14}
            placeholder="Digite o CNPJ"
            keyboardType="numeric"
            onChangeText={onChangeText}
            />
        </View>
    );
}

export default  InputCnpj ;

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