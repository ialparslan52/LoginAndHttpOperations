import { useContext, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {isLoading,register} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput placeholder='Kullanıcı Adı' value={email} style={styles.inputStyle} onChangeText={text => { setEmail(text) }} />
                <TextInput placeholder='Şifre' secureTextEntry value={password} style={styles.inputStyle} onChangeText={text => { setPassword(text) }} />
                <Button title='Register' />
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Do you have account ? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}><Text style={styles.link}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // elemanların ne tarafa doğru hizalanacağını seçer
        alignItems: 'center',  //seçilen yöne doğru hizalama işlemleri yapar
        justifyContent: 'center' //flexDirection yönünde ortalar, 
    },
    wrapper: {
        width: '80%'
    },
    inputStyle: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    link: {
        color: 'blue'
    }
});