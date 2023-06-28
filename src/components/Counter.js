const Counter = () => {

    let num = 1;

    const handleClick = (amount) => {
        console.log("click")
        num += amount
        console.log(num)
    }
    




    return ( 
        <div className="w-full bg-amber-300 h-1/2">
            <div className="text-5xl text-white">
                {num}
            </div>
            <button className="bg-red-500 text-white font-bold "
            onClick={() => {handleClick(1)}}>
                INC
            </button>
            <button className="bg-red-500 text-white font-bold ml-10"
            onClick={() => {handleClick(-1)}}>
                DEC
            </button>
        </div>
     );
}
 
export default Counter;
