import React from "react";
import { useGetAllProductsQuery } from "../../services/productsAPI";
import { Link,Outlet } from "react-router-dom";
function Products(){
    const {data,error,isLoading}=useGetAllProductsQuery()
    console.log(data)
    return (
        <div className="myProducts">
            <div>
            <h1>Products</h1>
            

            
            {
                isLoading?(
                    <img src="https://assets-v2.lottiefiles.com/a/d5392796-1169-11ee-908e-b33ed8d96ca4/kW0SJwvz27.gif" width="100"/>
                ):(
                    

                        data?.products?.map((p,id)=>{
                            return <li key={id}><Link to={`/products/productDetails/${p.id}`} >{p.title}</Link></li>
                        })
                
                )
            }
            </div>
            <div>

            <Outlet></Outlet>
            </div>
        </div>

    )
}
export default Products