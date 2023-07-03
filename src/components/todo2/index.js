import { useState } from "react";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";

// 2.
const Todo2 = () => {

    // 3. cmd 상태유지 -> Todo2List
    const [cmd, setCmd] = useState("list")

    // 5.1 changeView
    const changeView = (value) => {
        setCmd(value)
    }

    //4 cmd로 라우팅 하기
    const getView= () =>{
        if(cmd === 'list'){
            return <Todo2List changeView={changeView}></Todo2List>
        }else if(cmd === 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }
    }

    return ( 
        <>
        {getView()}
        </>
     );
}
 
export default Todo2;