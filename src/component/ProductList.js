import {FlatList} from 'react-native';
import ProductItem from './ProductItem';

function renderProductItem(itemData){
    return <ProductItem {...itemData.item}/>
}


function ProductList({products}){
    return (
    <FlatList 
    style={{width:'100%'}}
    data={products} 
    renderItem={renderProductItem} 
    keyExtractor={(item) =>{
        item.id
    }}/>
    );
}

export default ProductList;