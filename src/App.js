import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import Status from "./Component/Status/Status";
import StatusViewer from "./Component/Status/StatusViewer";
import Signin from "./Component/Register/Signin";
import Signup from "./Component/Register/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/status" element={<Status></Status>}></Route>
        <Route
          path="/status/:userId"
          element={<StatusViewer></StatusViewer>}
        ></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
