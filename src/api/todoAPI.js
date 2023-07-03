import axios from "axios";

const server = "http://localhost:8080/api/todos"
// 1.
// axios 통신 -> async의 결과값은 promise
export const getList = async() => {

    const res = await axios.get(`${server}/list`)

    return res.data
}

// 7. axios regist
export const postTodo = async(todo) => {
    const res = await axios.post(`${server}/`,todo)
    return res.data
}