import { useState } from "react";
import ZCountDisplay from "./ZCountDisplay";
import ZCOuntPanel from "./ZCountPanel";

// container -> 순수한 로직만 있음 
const ZCounter = () => {

    //2_1 prop을 여러개 전달해야할때 -> {... 전개연산자}
    const target = {
        p1: 'A',
        p2: 'B',
        p3: 'C',
        p4: 'D',
        p5: 'E',
    }

    // 상태 : useState
    const [obj, setObj] = useState({num:10})

    // 상태의 변경
    const changeObj = (amount) => {
        obj.num += amount
        setObj({...obj})
    }

    // 3초마다 호출 확인용
    // setInterval(() => {
    //     changeObj(1)
    // },3000)


    // 2-1
    return ( 
        <div>
            <ZCountDisplay value = {obj.num}/>
            {/* 함수를 전달 */}
            <ZCOuntPanel fn = {changeObj}/>
        </div>
     );
}
 
export default ZCounter;