// 숫자를 전달
// 출력만 하는 컴포넌트
const ZCountDisplay = ({value}) => {
    return (
        <div className="text-4xl text-white bg-blue-400 text">
        Count Display<br/>
        {value}
        </div>

      );
}
 
export default ZCountDisplay;