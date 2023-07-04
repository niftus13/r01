import { useEffect, useState } from "react";
import { getTodo, removeTodo } from "../../api/todoAPI";

const initState = {
    tno :0,
    title:''
}

const Todo2Read = ({target, changeView}) => {

    const [todo,setTodo] = useState(initState)

    useEffect(() => {

        getTodo(target).then(data => setTodo(data))

    },[target])

    const handleClickDel = async() => {
        const {result} = await removeTodo(target)

        // {result : 'success'}

        if(result === 'success'){
            alert("삭제되었습니다.")
        }
        changeView('list')

    }

    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>{todo.title}</div>
            <div className="flex p-4">
                <button className="p-2 m-2 bg-lime-200"
                
                >MOD</button>
                <button className="p-2 m-2 bg-lime-200"
                onClick={handleClickDel}
                >DEL</button>
            </div>
        </div>

     );
}
 
export default Todo2Read;