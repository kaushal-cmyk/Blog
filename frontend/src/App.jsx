import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Links from "./component/Links";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Links></Links>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route index element={<Home></Home>}></Route>

          {/* pages */}
          <Route path="create" element={<CreateBlog></CreateBlog>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
