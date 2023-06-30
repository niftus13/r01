

const TemplatePage = ({children}) => {

  console.log("children-----------------")
  console.log(children)

  const [header, main, footer] = children

  return ( 
    <div className="w-100 bg-blue-500 justify-center items-center h-[100vh]">
      <div className="w-100 h-[20vh] bg-red-200 justify-center items-center ">
        {header}
      </div>
      <div className="w-100 h-[60vh] bg-green-200 justify-center items-center ">
        {main}
      </div>
      <div className="w-100 h-[20vh] bg-pink-200">
        {footer || <h1>small footer</h1>}
      </div>
    </div>
  );
}
 
export default TemplatePage;