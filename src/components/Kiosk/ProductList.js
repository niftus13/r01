import axios from "axios";
import { useEffect, useState } from "react";


const ProductList = ({requestViewProduct}) => {

    const [obj,setObj] = useState([])
    console.log(obj)
    
    // useEffect
    useEffect(()=>{

        axios.get('http://localhost/products').then(res =>{
            console.log("effect : ",res.data)
            setObj(res.data)
        })

    },[])

    if(obj.length === 0 ){
        return(
            <div className="text-4xl">Loding.............</div>
        )
    }



    return ( 
        <ul>
            {obj.map(p => 
            <li key={p.id}
            onClick={() => requestViewProduct(p.id)}>
                {p.id} - {p.pname} = {p.price}
            </li>)}
        </ul>
     );
}
 
export default ProductList;