import { View, Image, Text, StyleSheet } from "react-native";

const UserDetail = (props) => {

    const { userInfo } = props;

    return (
        <View style={styles.mainContainer}>
            <Image source={{ uri: userInfo.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Ad Soyad: </Text>
                <Text>{userInfo.firstName} {userInfo.lastName}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Kullanıcı id: </Text>
                <Text>{userInfo.id}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Mail Adresi: </Text>
                <Text>{userInfo.email}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Kullanıcı Adı: </Text>
                <Text>{userInfo.username}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Cinsiyet: </Text>
                <Text>{userInfo.gender}</Text>
            </View>
        </View>
    );
};

export default UserDetail;

const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderWidth: 1,
        padding: 3,
        margin: 3,
        borderColor: '#bbbbbb',
        flexDirection: 'column',
        justifyContent: 'strecth',
        alignItems: 'center'
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