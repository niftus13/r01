
const Todo1List = ({ todos, changeView, requestView }) => {
    return (
        <div className="w-full h-[90vh] bg-blue-300">
            <div>Todo1 List</div>
            <ul>
                {todos.map(t => <li key={t.tno}
                    onClick={() => requestView(t.tno)}>
                    {t.tno} - {t.title}
                </li>)}
            </ul>
            <button onClick={() => changeView("input")}>INPUT</button>
        </div>
    );
}

export default Todo1List;