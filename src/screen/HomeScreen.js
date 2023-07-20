import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import UserDetail from '../component/UserDetail';
import { fetchProducts } from '../util/http';
import ProductList from '../component/ProductList';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const { isLoading, userInfo } = useContext(AuthContext);
    const [fetchedProducts, setFetchedProducts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function getProducts() {
            const products = await fetchProducts();
            setFetchedProducts(products)
        }
        getProducts();
    }, []);


    return (
        <View style={styles.mainContainer}>
            <Spinner visible={isLoading} />
            <View style={styles.topContainer}>
                <UserDetail userInfo={userInfo}/>
            </View>
            <View style={styles.bottomContainer}>
                <ProductList products={fetchedProducts}/>
            </View>
        </View>
    )
};

export default HomeScreen;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 25,
    },
    topContainer: {
        flex: 3,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 4,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
    },
});