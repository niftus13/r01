import { useState } from "react"

const product = [
    {pno : 1, pname : 'Americano', price : 7000, imgFile : 'd01.jpg'},
    {pno : 2, pname : 'Latte', price : 6000, imgFile : 'd02.jpg'},
    {pno : 3, pname : 'greenTea', price : 8000, imgFile : 'd03.jpg'},
    {pno : 4, pname : 'milk Tea', price : 9000, imgFile : 'd04.jpg'},
  ]


const Kiosk = () => {

    // prob4 상세정보
    const [current, setCurrent] = useState(null)

    const handleClickDedail = (product) => {
        console.log(product)

        setCurrent(product)
    }


    // 2-1 카트에 담기 (useState)
    const [items,setItems] = useState([])

    const handleClickBuy = (product) =>{
        console.log(product)

        // 2-2 filter (ele : 배열의 요소) 결과 = 배열
        const result = items.filter( ele => ele.pno === product.pno )

        console.log(result)

        // 필터의 배열의 length가 0 or 1
        //2-3 if 배열의 크기가 0이면 새상품, 1이면 있는 상품 qty += 1
        if(result.length === 0){

             //2-4 새 배열 만들기 (기존의 배열에 새 상품 추가 -> 카트쪽에 넣어줘야 함)
            setItems([...items, {...product, qty:1}])
            return
        }
        const cartItem = result[0]
        cartItem.qty += 1
        
        //2-5 리랜더링
        setItems([...items,])

       
    }

    // option1-1 파라미터 값이 있으면 람다식으로
    const handleClickQty = (pno, amount) =>{

        console.log("pno: ",pno,"amount : ",amount)
        // option1-3 타겟찾기
        const target = items.filter(item => item.pno === pno)[0]
        console.log("target",target)

        // option1-4 increase
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        }else{
        // option1-5 decrease
            
            // qty가 0이 되어 사라질때 
            if(target.qty === 1){
                setItems(items.filter(ele => ele.pno !== pno) )
            }else{
                // qty !== 1
                target.qty -= 1
                setItems([...items])
            }
        }
        


    }

    // option2-1 전체 price값 구하기
    // 반환값이 있으면 표현식으로 가능
    const getTotal = (arr) => {
        // option2-2 reduce
        if(!arr || arr.length === 0){
            return 0
        }
        // let sum = 0;
        // for(const ele of arr){
        //     sum += (ele.price * ele.qty)
        // }

        // prob3 reduce
        const sum = arr.reduce((sum, ele) => sum + ele.price*ele.qty,0)
        return sum
    }






    return (
        <div className="w-full h-screen bg-gray-100 flex " >
            <div className="w-3/5 bg-red-500 border-red-200">
                <div className="text-4xl font-extrabold ">Products</div>

                <ul className="flex text-center">
                    {product.map( p => 
                    <li
                    key = {p.pno}
                    className="text-2xl m-3 p-3 bg-neutral-50 w-60"
                    >
                        <img src ={require(`../image/${p.imgFile}`)} className=" w-56 h-56"
                        onClick={() => {handleClickDedail(p)}}
                        >
                        </img>
                    {p.pno}번<br/>  {p.pname}<br/>  {p.price}
                    <br />
                    <button className="border-2 m-2 rounded-sm border-blue-300 "
                    onClick={() => {handleClickBuy(p)}}
                    >BUY</button>
                    
                    </li>)}
                </ul>
            </div>
            <div className="w-1/3 ">
                <div className="text-4xl font-extrabold ">Cart</div>
                <ul>
                    {items.map( (item, idx) => 
                    <li key = {idx} className="border-2">
                        {/*2_1_1 옵션 - 버튼 */}
                        <div className="flex text-3xl text-gray-800 m-3 p-3">
                            <div>{item.pno}-</div>
                            <div>{item.pname}-</div>
                            <div>{item.price}</div>
                        </div>
                        <div className="flex justify-center text-2xl ">
                            <button className="rounded-lg bg-red-100 50 p-3 m-3"
                            // option1-2 클릭시 값이 오르거나 내리게 onclick
                            onClick = {()=> handleClickQty(item.pno,1)}
                            >+</button>
                            <p className="m-2 p-2 text-red-600">{item.qty}</p>
                            <button className="rounded-lg bg-red-100 p-3 m-3"
                            onClick = {()=> handleClickQty(item.pno,-1)}
                            >-</button>
                        </div>
                    </li>)}
                </ul>
                <div className=" w-2/5 absolute left-0 bottom-8 text-4xl flex ">
                    <div>view</div>
                    <img src ={require(`../image/${current.imgFile}`)} className=" w-56 h-56 float-left"
                    ></img>
                    {current ? 
                    <div>{current.pno}
                    {current.pname}
                    {current.price}
                    </div>
                    :
                    <></>
                }
                </div>
                {/* option2-3 총합 화면 */}
                <div className=" bg-red-100 text-5xl float-right relative bottom-0">
                        TOTAL  {getTotal(items)}
                </div>
            </div>
        </div>
      );
}
 
export default Kiosk;