import "./App.css";
import { Otp } from "./Component/Otp";
function App() {
  return (
    <div className="h-screen bg-blue-400 flex justify-center">
      <Otp number={5} />
    </div>
  );
}

export default App;
