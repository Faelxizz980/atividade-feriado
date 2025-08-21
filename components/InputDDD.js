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
    container:{
        display: "flex", 
        alignItems: 'center', 
        marginTop: '100px'
    },
    
    input: {
        width: '90%',
        height: '2rem',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#5a5a5a',
        borderRadius: '6px',
        color: '#383838',
        padding: '5px',
        
    }
})

export default  InputDDD ;