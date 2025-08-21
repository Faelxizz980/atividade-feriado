import { StyleSheet, View, TextInput } from 'react-native';

export default function InputText ({maxLength, placeholder, keyboardType, onChangeText }) {
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            maxLength={maxLength}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
          />          
        </View>
    );
};
    
  const styles = StyleSheet.create({
    input:{ 
      height: 40, 
      width: '100%',
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
    }
  });