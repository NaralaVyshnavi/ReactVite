import React from 'react';
function Recipes(){
    const [recipes,update]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
    .then(res=>res.json())
    .then(data=>update(data.recipes))
    },[]
    )
    
    return(
        <div>
            {
             recipes.map(r=>{
                return <li>{r.name}</li>
             })   
            }
        </div>
    )
}
export default Recipes