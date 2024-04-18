
import { Carrousel } from "@/components/Carrousel";
import { InputCard } from "@/components/InputComponent";

import "./App.css";

function App() {

  return (
    <>
      <div className="flex justify-center space-x-2 ">
        <InputCard />
      </div>
      <div className="flex justify-center pt-40">
        <Carrousel />
      </div>
    </>
  );
}

export default App;