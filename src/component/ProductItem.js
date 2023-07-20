import { View, StyleSheet, Image, Text } from "react-native";

const ProductItem = ({ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }) => {


    //console.log(`VERILER..: ${title} ${price} ${stock} ${category} ${images}`);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.paddingContainer}>
                <Image source={{ uri: images }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Kategori: </Text>
                    <Text>{category}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Ürün: </Text>
                    <Text>{title}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Fiyat: </Text>
                    <Text>{price}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Stok: </Text>
                    <Text>{stock}</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paddingContainer: {
        width: '90%',
        alignItems:'center',
    },
    image: {
        width:300,
        height: 150,
        marginVertical:10
    },
    textContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#bbbbbb',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 3,
        margin: 3,
    },
    titleText: {
        fontWeight: 'bold'
    }
});