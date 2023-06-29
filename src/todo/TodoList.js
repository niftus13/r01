

// 2 list 생성
// 7 필요한 데이터 받기
const TodoList = ({arr, removeFn}) => {
    return ( 
        <div>
            todolist
            {/* todo 구현 */}
            <ul>
                {arr.map(todo => <li className="m-3 text-3xl p-3"
                key={todo.tno}>
                {todo.tno} - {todo.title} 
                {/* 8. delete버튼 구현 */}
                <button className=" bg-red-600 "
                // 파라미터 필요할땐  람다식
                onClick={()=> removeFn(todo.tno)}
                >DEL</button>
                <button>modify</button>
                </li>
                )}
            </ul>
        </div>
     );
}
 
export default TodoList;