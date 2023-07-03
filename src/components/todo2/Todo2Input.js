// 5. input register

import { useState } from "react";
import { postTodo } from "../../api/todoAPI";

// 6. initState
const initState = {
    title:''
}

const Todo2Input = ({changeView}) => {

    // 6.1 상태
    const [todo,setTodo] = useState(initState)

    // 6.2 동적상태변환
    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }


    return ( 
        <div className="w-full h-[100vh] bg-purple-200">
            <div className="text-3xl">Todo2 List</div>
            <div className="text-2xl m-2 p-2 border-2">
                <input type="text" name="title" value={todo.title} onChange={handleChangeTodo}></input>
                {/* 6.3 prg패턴을 벗어나  */}
                <button onClick={() => 
                    postTodo(todo).then(newTodo => {
                        alert("새로운 TODO"+ newTodo.tno)
                        changeView("list")
                    })
                    }>Register</button>
            </div>
        </div>
     );
}
 
export default Todo2Input;