import { useState } from "react";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";
import Todo2Read from "./Todo2Read";

// 2.
const Todo2 = () => {

    // 3. cmd 상태유지 -> Todo2List
    const [cmd, setCmd] = useState("list")
    // read 넘겨주는 타겟
    const [target, setTarget] = useState(0)

    // 5.1 changeView
    // tno 값을 넘겨줘야함
    const changeView = (value,tno) => {
        setCmd(value)
            
        if(tno){
            setTarget(tno)
        }
    }

    //4 cmd로 라우팅 하기
    const getView= () =>{
        if(cmd === 'list'){
            return <Todo2List changeView={changeView}></Todo2List>
        }else if(cmd === 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }else if(cmd === 'read'){
            return <Todo2Read target={target} changeView={changeView}></Todo2Read>
        }
    }

    // 조회하러가기

    return ( 
        <>
        <div className="w-full h-24 bg-blue-700 flex">
            <div className="border-2 text-white w-32 " onClick={() => changeView("list")}>LIST</div>
            <div className="border-2 text-white w-32 " onClick={() => changeView("input")}>INPUT</div>
        </div>
        <div>
        {getView()}
        </div>
        </>
     );
}
 
export default Todo2;