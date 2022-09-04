import { Routes, Route } from "react-router-dom";

import MiniDrawer from './components/sideBar/MiniDrawer';

import './App.css';

import Home from './pages/home/Home';
import ProjectOrder from './pages/order/projectOrder/ProjectOrder';
import ApplicationOrder from './pages/order/applicationOrder/ApplicationOrder';
import CloudResourceOrder from './pages/order/cloudResourceOrder/CloudResourceOrder';
import CloudServiceOrder from './pages/order/cloudServiceOrder/CloudServiceOrder';
import StickyHeadTable from "./components/table/StickyHeadTable";
import MenuAppBar from "./components/sideBar/Practice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiniDrawer />} >
          <Route index element={<MenuAppBar />} />
          {/* <Route index element={<StickyHeadTable />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="order/projectOrder" element={<ProjectOrder />} />
          <Route path="order/applicationOrder" element={<ApplicationOrder />} />
          <Route path="order/cloudResourceOrder" element={<CloudResourceOrder />} />
          <Route path="order/cloudServiceOrder" element={<CloudServiceOrder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
