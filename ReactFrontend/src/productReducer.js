import {products} from './products.json'
const initialState={
    products:products
}
function productReducer(state=initialState,action){
    return state;
}
export default productReducer