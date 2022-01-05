import "./App.css";
import Home from "./component/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Chart from "./component/Chart";
import Buy from "./component/Buy";
import InfoToken from "./component/InfoToken";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/info-token" element={<InfoToken />} />

        {/* <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/" />} />
          <Route path="/" element={<h1>Trang chu</h1>} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
