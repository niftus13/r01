// Zkiosk 1
// 통신의 중앙지점 -> 여기가 바뀌면 상품이 바뀐다
// 

import { useState } from "react"
import ZProductList from "./ZProductList"
import ZCart from "./ZCart"


const ZKiosk = () => {

    // 1-7 cart에 뿌려주기
    const [items,setItems]=useState([])


    //1-5 logic
    // 상품목록에서 필요한 함수
    //1-11 setItems cart로 보내주기
    const buyProduct = (product) =>{
        console.log("buyProduct",product)
        // 해당상품이 카트에 있는지?
        //1-12 filter
        const targetArr = items.filter(item => item.pno === product.pno)

        if(targetArr.length === 0) {
            setItems([...items, {...product, qty:1}])
            return
        }
        targetArr[0].qty += 1
        setItems([...items])
    }

    const viewProduct = () =>{
        console.log("viewProduct")
    }


    // 1-8 수량 바꿔주는 함수 -> cart
    const changeQty = (pno, amount) => {
        console.log("changeQty")

        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        if(targetItem.qty === 0 ){
            setItems(items.filter(item => item.pno !== pno))
            return
        }
        
        setItems([...items])

    }


    return ( 
        <>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </>
     );
}
 
export default ZKiosk;