

// 함수(객체) -> 전달받는다
const ZCOuntPanel = ({fn}) => {
    return ( 

        <div className=" bg-red-200 flex p-6">
        Count Panel
        <button 
        className="m-6 p-2 bg-blue-300"
        onClick={() => fn(1)}
        >
            INC
            </button>





        <button className="m-6 p-2 bg-blue-500"
        onClick={() => fn(-1)}>
            DEC
            </button>
        </div>

     );
}
 
export default ZCOuntPanel;