import { useState } from "react";

import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from "react-uuid";
import Todo1List from "./Todo1List";

const Todo1 = () => {

    const [todos, setTodos] = useState([])
    const [current, setCurrent] = useState(null)



    const addTodo = (todoObj) => {
        console.log( uuid(), todoObj)

        setTodos([...todos, {tno:uuid(), ...todoObj}])
        setCmd('list')
    }

    const requestView = (tno) => {
        const target = todos.filter(todo => todos.tno === tno)[0]

        console.log("requestView", target)
        setCurrent({...target})
        setCmd('read')
    }

        
    useEffect(() =>{

    },[])

    const viewMap = {
        list:<Todo1List requestView={requestView} todos={todos} changeView={changeView}></Todo1List>,
        input:<Todo1Input changeView={changeView} addTodo={addTodo}></Todo1Input>,
        read:<Todo1Read current={current} changeView={changeView}></Todo1Read>
    }




    // 1- jsx반환 하는 함수
    const getView = () => {


        // 3. 라우팅 if
        if(cmd === 'list'){
            return 
        }else if(cmd === 'input'){
            return 
        }else if(cmd === 'read'){
            return 
        }

    }

    return ( 
        <>
            <div className="text-5xl">Todo1</div>
            <div>
                {getView()}
            </div>
        </>
     );
}
 
export default Todo1;