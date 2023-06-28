import { useState } from "react"


const product = [
    {pno : 1, pname : 'Americano', price : 7000},
    {pno : 2, pname : 'Latte', price : 6000},
    {pno : 3, pname : 'greenTea', price : 8000},
    {pno : 4, pname : 'milk Tea', price : 9000},
  ]


const Kiosk = () => {

    // 카트에 담기 (useState)
    const [items,setItems] = useState([])

    const handleClickBuy = (product) =>{
        console.log(product)

        //filter (ele : 배열의 요소) 결과 = 배열
        const result = items.filter( ele => ele.pno === product.pno )

        console.log(result)


        // 새 배열 만들기 (기존의 배열에 새 상품 추가 -> 카트쪽에 넣어줘야 함)
        setItems([...items, {...product, qty:1}])
    }

    return (
        <div className="w-full h-{100vh} bg-slate-400 flex">
            <div className="w-2/3 bg-red-300">
                <div className="text-4xl font-extrabold">Products</div>

                <ul>
                    {product.map( p => 
                    <li
                    key = {p.pno}
                    className="text-2xl underline m-3 p-3 bg-yellow-300"
                    onClick={() => {handleClickBuy(p)}}
                    >
                    {p.pno} - {p.pname} - {p.price}
                    <button className="border-2 m-2 rounded-sm border-blue-300">BUY</button>
                    </li>)}
                </ul>
            </div>
            <div className="w-1/3 ">
                <div className="text-4xl font-extrabold">Cart</div>
                <ul>
                    {items.map( (item, idx) => <li key = {idx}>{item.pno} - {item.pname} - {item.qty}</li>)}
                </ul>
            </div>
        </div>
      );
}
 
export default Kiosk;