import { useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "../../services/productsAPI";

function ProductDetails(){
        const {id} = useParams();
        console.log(id)
       const {data,error,isLoading} =useGetProductByIdQuery(id)
    return (
        <div className="myBox">
            <h1>ProductDetails</h1>
               {
                isLoading?(
                     <img src="https://assets-v2.lottiefiles.com/a/d5392796-1169-11ee-908e-b33ed8d96ca4/kW0SJwvz27.gif" width="100"/>
                ):(
                    <div>
                        <h1>{data.title}</h1>
                        <img src={data.thumbnail} alt="" />
                    </div>
                )
               }
        </div>
    )
}
export default ProductDetails