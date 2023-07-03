//3.1 list화면

import { useEffect, useState } from "react";
import { getList } from "../../api/todoAPI";

// 4.1 map 돌릴 데이터 initState
const initState = {dtoList:[]}



const Todo2List = ({changeView}) => {

    // 4.2 data 상태
    const [data,setData] = useState(initState)

    //4.3 useEffect 는 항상 랜더링 끝난 후에 일어남 , 1번만 일어나게 : []
    useEffect(() => {
        getList().then(result => {
            console.log(result)
            setData(result)
        })

    },[])

    return ( 

        <div className="w-full h-[100vh] bg-sky-500">
            <div className="text-3xl">
                Todo2 List
                <button onClick={() => changeView('input')}>INPUT</button>
            </div>
    {/* 4.3 data map 돌리기 */}
            <ul>
                {data.dtoList.map( todo => <li key={todo.tno}>{todo.title}</li>)}
            </ul>
        </div>

     );
}
 
export default Todo2List;