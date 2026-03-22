import { connect } from "react-redux"

function Products(props){
    console.log(props)
    return(
        <div>
            <h1>Products</h1>
            <ul>
                {
                    props.products.map((p,i)=>{
                        return <li key={i}>{p.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store=>store.productReducer)(Products)