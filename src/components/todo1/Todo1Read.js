import { useEffect, useState } from "react";

const Todo1Read = ({changeView, current}) => {

    const [todo, setTodo] = useState(current)

    useEffect(() => {
        setTodo(current)
    },[current])

    if(!todo) {
        return <></>
    }

    return ( 
        <div className="w-full h-[90vh] bg-red-300">
            <div>
                <button onClick={() => changeView('list')}>Go List</button>
            </div>
            <div>Todo1 Read</div>
            <div>
                {todo.tno}
            </div>
            <div>
                {todo.title}
            </div>
        </div>
     );
}
 
export default Todo1Read;