

const products = [
    {pno : 1, pname : 'Americano', price : 7000},
    {pno : 2, pname : 'Latte', price : 6000},
    {pno : 3, pname : 'greenTea', price : 8000},
    {pno : 4, pname : 'milk Tea', price : 9000},
  ]


const Kiosk = () => {

    const handleClickBuy = (products) =>{
        console.log(products)
    }

    return (
        <div className="w-full h-{100vh} bg-slate-400 flex">
            <div className="w-2/3 bg-red-300">
                <div className="text-4xl font-extrabold">Products</div>
                <ul>
                    {products.map( p => 
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
            </div>
        </div>
      );
}
 
export default Kiosk;