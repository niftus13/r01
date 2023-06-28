import { useState } from "react";

// 객체 스타일
const Counter2 = () => {
    
    const [obj , setObj] = useState({num : 10})
    // spreader
    console.log({...obj})
    
    return (  

        <div>
            {obj.num}
            <button onClick={()=>{
                obj.num += 1
                console.log(obj.num)
                // obj 의 값이 변하지 않았기 때문에 (num)값만 바뀜 : 랜더링이 일어나지 않음
                // 새로운 객체로 바꿔줘야함
                // setObj(obj) -> 동작 X
                // {} 새로운 객체를 생성: ... spread로 풀어서 생성
                setObj({...obj})

            }}>INC</button>
        </div>
    

    );
}
 
export default Counter2;