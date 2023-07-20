import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const {isLoading,login} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput placeholder='Kullanıcı Adı' value={email} style={styles.inputStyle} onChangeText={text => { setEmail(text) }} />
                <TextInput placeholder='Şifre' secureTextEntry value={password} style={styles.inputStyle} onChangeText={text => { setPassword(text) }} />
                <Button title='Login' onPress={() =>{
                    login(email,password);
                } }/>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text>Dont you have account ? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }}><Text style={styles.link}>Register</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;

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