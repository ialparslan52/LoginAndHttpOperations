import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    const { userInfo } = useContext(AuthContext);


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.token ? (
                    <Stack.Screen
                        name='HomeScreen'
                        component={HomeScreen}
                        options={{ headerShown: false }} />
                ) : (
                    <>
                        <Stack.Screen
                            name='LoginScreen'
                            component={LoginScreen}
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name='RegisterScreen'
                            component={RegisterScreen}
                            options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;