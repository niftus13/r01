// 1-3

import ZCartItem from "./ZCartItem";

// 1-7
const ZCart = ({arr, changeQty}) => {

    console.log(arr)

    if(arr===null || arr.length === 0 ){
        return(
            <></>
        )
    }


    return (
        <div>
            <ul>
                {arr.map( (cartItem, idx) =>
                 <li key={idx}>
                    <ZCartItem {...cartItem} changeQty={changeQty}></ZCartItem>
                 </li>)}
            </ul>
        </div>
      );
}

 
export default ZCart;