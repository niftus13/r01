
import axios from "axios";
import { useEffect, useState } from "react";

const initState = {
    id : 0,
    pname : '',
    price : 0
}


const ProductDetail = ({ target, requestBuy}) => {

    const [product , setProduct] = useState(initState)


    useEffect(() => {
        
        console.log("useEffect.........", target)
        
        const id = target.pno

        if(id !== 0){
            axios.get(`http://localhost/products/${id}`).then(res => {
                setProduct(res.data)
            })
        }

    }, [ target ])

    return ( 
        <div>
            <div>Product Detail</div>
            <div>
                <div>ID {product.id}</div>
                <div>PNAME {product.pname}</div>
                <div>PRICE {product.price}</div>
                <button 
                className="bg-red-300 text-white"
                onClick={() => requestBuy(product)}
                >ADD CART</button>
            </div>
        </div>
     );
}
 
export default ProductDetail;