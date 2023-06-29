// 1-2 productlist

// 1-8 productlist 만들기
const Products = [
    {pno : 1, pname : 'Americano', price : 7000},
    {pno : 2, pname : 'Latte', price : 6000},
    {pno : 3, pname : 'greenTea', price : 8000},
    {pno : 4, pname : 'milk Tea', price : 9000 }
  ]

// 1-6 
const ZProductList = ({buyProduct, viewProduct}) => {

    return (
        // 1-9 리스트 뿌리기 p 구조분해 할당
        <div className="w-full bg-indigo-200 text-3xl m-12 p-10">
            <ul>
                {Products.map(p => 
                    <li 
                    key={p.pno}>
                        {p.pname}
                    <button 
                    className="bg-red-300"
                    // 안전한 코드 p 만 던지는것 보다 값의 변조에서 안전하다 [...p]
                    // 1-10 index로 던지기
                    onClick={() => buyProduct({...p})}
                    >BUY</button>
                    </li>
                    
                )}
            </ul>
        </div>
      );
}
 
export default ZProductList;