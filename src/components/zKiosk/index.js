// Zkiosk 1
// 통신의 중앙지점 -> 여기가 바뀌면 상품이 바뀐다
// 

import { useState } from "react"
import ZProductList from "./ZProductList"
import ZCart from "./ZCart"


const ZKiosk = () => {

    //1-5 logic
    // 상품목록에서 필요한 함수
    const buyProduct = () =>{
        console.log("buyProduct")
    }

    const viewProduct = () =>{
        console.log("viewProduct")
    }

    // 1-7 cart
    const [items,setItems]=useState([])

    // 1-8 수량 바꿔주는 함수 -> cart
    const changeQty = () => {
        console.log("changeQty")
    }


    return ( 
        <>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </>
     );
}
 
export default ZKiosk;