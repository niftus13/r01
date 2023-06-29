import Kiosk from "./components/Kiosk";
import ZKiosk from "./components/zKiosk";
import ZCounter from "./components/zcounter";
import SampleLayout from "./layout/SampleLayout";
import TemplatePage from "./layout/TemplatePage";


function App() {
  return (
    // <div className="border-spacing-8 font-bold">
    //   <Kiosk></Kiosk>
    // </div>
    <div>
      <TemplatePage>
        <div className="text-6xl text-red-800">LOGO HEADER</div>
        <ZKiosk/>
        <div className="text-6xl text-red-800">LOGO FOOTER</div>
      </TemplatePage>
 
    </div>
  );
}

export default App;
