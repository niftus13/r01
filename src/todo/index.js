
// 1 todo index 생성 -> 컨테이너형

import { useState } from "react";
import TemplatePage from "../layout/TemplatePage";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const Todo = () => {
    //3 todo 배열 
    const [todoArr, setTodoArr] = useState([])

    // 4 addTodo 함수 받아오기
    const addTodo = (newTodo) =>{
        console.log("addTodo", newTodo)
        
        // 6 배열에 추가
        setTodoArr([...todoArr, newTodo])
    }

    // 9. delete 버튼 함수
    const removeTodo = (tno) => {
        console.log("removeTodo", tno)
        
        setTodoArr(todoArr.filter(todo => { return todo.tno !== tno}))
    }


    return (
        <TemplatePage>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList arr={todoArr} removeFn={removeTodo}></TodoList>
        </TemplatePage>
      );
}
 
export default Todo;